import { createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useCollections, useDynamicTokens } from '@reservoir0x/reservoir-kit-ui';

export const ExploreContext = createContext(undefined);

export const ExploreContextAPI = ({ children }) => {
    const routeParams = useParams();
    const collectionId = routeParams.id;
    const { data: collection } = useCollections({ id: collectionId });
    const { data: tokens, isFetchingInitialData, fetchNextPage, isFetchingPage, hasNextPage } = useDynamicTokens({ collection: collectionId, limit: 40 });

    return (
        <ExploreContext.Provider value={{
            collection,
            tokens,
            isFetchingInitialData,
            isFetchingPage,
            fetchNextPage,
            hasNextPage,
        }}>
            {children}
        </ExploreContext.Provider>
    );
}

export const useExploreContext = () => useContext(ExploreContext);
