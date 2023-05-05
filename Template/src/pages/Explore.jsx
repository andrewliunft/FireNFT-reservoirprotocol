// components
import Title from '@components/Title';
import SimplePageHeader from '@components/SimplePageHeader';
import Wrapper from '@layout/explore/Wrapper';
import Sidebar from '@layout/explore/Sidebar';
import Items from '@layout/explore/Items';

// context
import {FilterContextAPI} from '@contexts/filterContext';
import {ExploreContextAPI} from '@contexts/exploreContext';

const Explore = () => {
    return (
        <>
            <Title title="Explore" />
            <SimplePageHeader title="Explore" />
            <main>
                <ExploreContextAPI>
                    <FilterContextAPI>
                        <Wrapper>
                            <Sidebar />
                            <Items />
                        </Wrapper>
                    </FilterContextAPI>
                </ExploreContextAPI>
            </main>
        </>
    )
}

export default Explore