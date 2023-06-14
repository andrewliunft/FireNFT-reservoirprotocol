import { createContext, useContext } from 'react';

import { useParams } from 'react-router-dom';
import { useCollections } from '@reservoir0x/reservoir-kit-ui';

export const ExploreGridContext = createContext(undefined);

export const ExploreGridContextAPI = ({ children }) => {
    const params = useParams();
    const searchQuery = params.query;

    const { data: collections, isFetchingInitialData, fetchNextPage, isFetchingPage, hasNextPage } = useCollections({ name: searchQuery, limit: 20 });

    return (
        <ExploreGridContext.Provider value={{
            collections,
            isFetchingInitialData,
            isFetchingPage,
            fetchNextPage,
            hasNextPage,
        }}>
            {children}
        </ExploreGridContext.Provider>
    );
}

export const useExploreGridContext = () => useContext(ExploreGridContext);
