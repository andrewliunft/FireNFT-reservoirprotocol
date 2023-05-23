// components
import Title from '@components/Title';
import SimplePageHeader from '@components/SimplePageHeader';
import Wrapper from '@layout/collection-detail/Wrapper';
import Sidebar from '@layout/collection-detail/Sidebar';
import Items from '@layout/collection-detail/Items';

// context
import { FilterContextAPI } from '@contexts/filterContext';
import { ExploreContextAPI } from '@contexts/exploreContext';


const Collection = () => {
    return (
        <ExploreContextAPI>
            <>
                <Title title="Collection" />
                <SimplePageHeader title="Collection" />
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