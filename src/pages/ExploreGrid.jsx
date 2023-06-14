// components
import Title from '@components/Title';
import SimplePageHeader from '@components/SimplePageHeader';
import ExploreGridContent from '@layout/collection-list';

// context
import { ExploreGridContextAPI } from '@contexts/exploreGridContext';
import { FilterContextAPI } from '@contexts/filterContext';

const ExploreGrid = () => {
    return (
        <>
            <Title title="Explore" />
            <SimplePageHeader title="컬렉션 검색 결과" />
            <main>
                <ExploreGridContextAPI>
                    <FilterContextAPI>
                        <ExploreGridContent />
                    </FilterContextAPI>
                </ExploreGridContextAPI>
            </main>
        </>
    )
}

export default ExploreGrid