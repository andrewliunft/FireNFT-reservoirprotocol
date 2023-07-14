import { createContext, useState, useContext, useEffect } from 'react';
import { axios } from '@reservoir0x/reservoir-sdk';

export const HotTokensContext = createContext(undefined);

export const HotTokensContextAPI = ({ children }) => {
  const RESERVOIR_API_KEY = process.env.REACT_APP_RESERVOIR_API_KEY;
  const HOT_COLLECTIONS = process.env.REACT_APP_HOT_COLLECTIONS;
  const BANNER_COLLECTIONS = process.env.REACT_APP_BANNER_COLLECTIONS;

  const [hotTokens, setHotTokens] = useState([]);
  const [isLoadingHotTokens, setIsLoadingHotTokens] = useState(true);
  const [bannerTokens, setBannerTokens] = useState([]);
  const [isLoadingBannerTokens, setIsLoadingBannerTokens] = useState(true);

  useEffect(() => {
    axios.get('https://api.reservoir.tools/collections/v5', {
      headers: {
        'x-api-key': { RESERVOIR_API_KEY }
      },
      params: {
        collectionsSetId: HOT_COLLECTIONS,
      }
    }).then(res => {
      setHotTokens(res.data.collections)
      setIsLoadingHotTokens(false);
    })
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    axios.get('https://api.reservoir.tools/collections/v5', {
      headers: {
        'x-api-key': { RESERVOIR_API_KEY }
      },
      params: {
        collectionsSetId: BANNER_COLLECTIONS,
      }
    }).then(res => {
      setBannerTokens(res.data.collections)
      setIsLoadingBannerTokens(false);
    })
      .catch(err => console.log(err));
  }, [])

  return (
    <HotTokensContext.Provider value={{ hotTokens, isLoadingHotTokens, bannerTokens, isLoadingBannerTokens }}>{children}</HotTokensContext.Provider>
  )
}

export const useHotTokensContext = () => useContext(HotTokensContext);