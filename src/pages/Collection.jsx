// components
import Title from '@components/Title';
import { CollectionPageHeader } from '@components/SimplePageHeader';
import Wrapper from '@layout/collection-detail/Wrapper';
import Sidebar from '@layout/collection-detail/Sidebar';
import Items from '@layout/collection-detail/Items';

// context
import { FilterContextAPI } from '@contexts/filterContext';
import { ExploreContextAPI } from '@contexts/exploreContext';

import { useCollections } from '@reservoir0x/reservoir-kit-ui';
import { useParams } from 'react-router-dom';


const Collection = () => {
    const routeParams = useParams();
    const collectionId = routeParams.id;
    const { data } = useCollections({ id: collectionId });
    const collection = data[0]

    return (
        <ExploreContextAPI>
            <>
                <Title title="Collection" />
                <CollectionPageHeader title={collection?.name} collection={collection} subtext={'판매 금액에는 가스비 (실시간 변동하는 블록체인 거래 수수료)가 포함되지 않았습니다.\n최종 결제 단계에서 가스비 및 수수료가 포함된 결제금액을 확인하실 수 있습니다.'} />
                <main>
                    <FilterContextAPI>
                        <Wrapper>
                            <Sidebar />
                            <Items />
                        </Wrapper>
                    </FilterContextAPI>
                </main>
            </>
        </ExploreContextAPI>
    )
}

export default Collection