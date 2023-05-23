import { createContext, useState, useContext, useEffect } from 'react';
import { axios } from '@reservoir0x/reservoir-sdk';

export const HotTokensContext = createContext(undefined);

export const HotTokensContextAPI = ({ children }) => {
  const RESERVOIR_API_KEY = process.env.REACT_APP_RESERVOIR_API_KEY;
  const HOT_COLLECTIONS = process.env.REACT_APP_HOT_COLLECTIONS;

  const [hotTokens, setHotTokens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("search api called");
    axios.get('https://api.reservoir.tools/collections/v5', {
      headers: {
        'x-api-key': { RESERVOIR_API_KEY }
      },
      params: {
        collectionsSetId: HOT_COLLECTIONS,
      }
    }).then(res => {
      console.log("calling search API")
      setHotTokens(res.data.collections)
      setIsLoading(false);
    })
      .catch(err => console.log(err));
  }, [])

  return (
    <HotTokensContext.Provider value={{ hotTokens, isLoading }}>{children}</HotTokensContext.Provider>
  )
}

export const useHotTokensContext = () => useContext(HotTokensContext);