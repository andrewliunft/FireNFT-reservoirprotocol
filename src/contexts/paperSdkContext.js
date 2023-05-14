import { createContext, useContext, useState } from 'react';
import { PaperEmbeddedWalletSdk } from '@paperxyz/embedded-wallet-service-sdk'


export const PaperSdkContext = createContext(undefined);

export const PaperSdkContextProvider = ({ children }) => {
  const sdk = new PaperEmbeddedWalletSdk({
    clientId: '5e7ac62b-cc0c-4bb2-ad1c-35014e20e016',
    chain: 'Ethereum',
  });

  const [user, setUser] = useState(null);

  return (
    <PaperSdkContext.Provider value={{
      sdk,
      user,
      setUser,
    }}>
      {children}
    </PaperSdkContext.Provider>
  );
}

export const usePaperSdkContext = () => useContext(PaperSdkContext);