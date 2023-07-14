import { createContext, useContext, useState, useEffect } from 'react';
import { PaperEmbeddedWalletSdk } from '@paperxyz/embedded-wallet-service-sdk'
import { useAuth } from '@contexts/authContext';
import useScrollLock from '@hooks/useScrollLock';
import { UserStatus } from "@paperxyz/embedded-wallet-service-sdk";
import axios from 'axios';
import { toast } from 'react-toastify';

export const PaperSdkContext = createContext(undefined);

export const PaperSdkContextProvider = ({ children }) => {
  const PAPER_KEY = process.env.REACT_APP_PAPER_KEY;
  const PAPER_SECRET = process.env.REACT_APP_PAPER_SECRET;
  const CHECKOUT_CONTRACT_ID = process.env.REACT_APP_CHECKOUT_CONTRACT_ID;

  const sdk = new PaperEmbeddedWalletSdk({
    clientId: PAPER_KEY,
    chain: 'Ethereum',
  });

  const [user, setUser] = useState(null);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [sdkClientSecret, setSdkClientSecret] = useState("");
  const { lockScroll, unlockScroll } = useScrollLock();
  const { isLogged, setIsLogged } = useAuth();

  useEffect(() => {
    isPurchaseModalOpen ? lockScroll() : unlockScroll();

    return () => {
      unlockScroll();
    }
  }, [isPurchaseModalOpen]);

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('user') !== null) {
        try {
          setUser(JSON.parse(localStorage.getItem('user')));
          setIsLogged(true);
        } catch (e) {
          console.log(e)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  const openPurchaseModal = async (collectionContractAddress, tokenId, marketplaceSource) => {
    const body = JSON.stringify({
      contractId: CHECKOUT_CONTRACT_ID,
      walletAddress: user.walletAddress,
      title: "FireNFT 바로구매",
      email: user.email,
      contractArgs: {
        nfts: [{
          token: collectionContractAddress + ":" + tokenId,
          collectionContractAddress: collectionContractAddress,
          tokenId: tokenId,
          marketplaceSource: marketplaceSource
        }]
      },
    })

    const resp = await axios.post("https://87nbon6c51.execute-api.ap-northeast-2.amazonaws.com/staging", { // proxy
      url: "https://withpaper.com/api/2022-08-12/checkout-sdk-intent",
      headers: {
        "Authorization": `Bearer ${PAPER_SECRET}`,
      },
      body: body,
    }).then((res) => {
      return res
    }).catch((err) => { console.log('err:', err) });


    if (resp.data?.statusCode === 200) {
      const sdkClientSecret = JSON.parse(resp.data.body).sdkClientSecret;
      setSdkClientSecret(sdkClientSecret);
      setIsPurchaseModalOpen(true)
    } else {
      toast.error("구매가 불가능합니다.")
      console.log(resp.data.body)
    }
  };

  const onClickPurchase = async (collectionContractAddress, tokenID, marketplaceSource) => {
    if (user === null) {
      toast.info("로그인이 필요합니다.");
      await sdk.auth.loginWithPaperModal();
      const user = await sdk.getUser();

      switch (user.status) {
        case UserStatus.LOGGED_OUT: {
          // Call sdk.auth.loginWithPaperModal() to log the user in.
          console.log("wut");
          break;
        }
        case UserStatus.LOGGED_IN_WALLET_INITIALIZED: {
          setUser(user);
          break;
        }
        default:
          break;
      }
    }

    await openPurchaseModal(collectionContractAddress, tokenID, marketplaceSource);
  }

  const closePurchaseModal = () => setIsPurchaseModalOpen(false);

  return (
    <PaperSdkContext.Provider value={{
      sdk,
      user,
      setUser,
      isPurchaseModalOpen,
      openPurchaseModal,
      closePurchaseModal,
      sdkClientSecret,
      onClickPurchase,
    }}>
      {children}
    </PaperSdkContext.Provider>
  );
}

export const usePaperSdkContext = () => useContext(PaperSdkContext);