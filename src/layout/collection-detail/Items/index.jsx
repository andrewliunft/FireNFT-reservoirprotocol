// styling
import styles from './style.module.scss';

// components
import CustomSelect from '@ui/CustomSelect';
import ItemsGrid from '@components/ItemsGrid';
import Pagination from '@ui/Pagination';
import StickyFilterBar from '@ui/StickyFilterBar';
import NothingFound from '@components/NothingFound';

// constants
import { SORTING_OPTIONS } from '@constants/explore';

// hooks
import { useWindowSize } from 'react-use';
import usePagination from '@hooks/usePagination';
import { useExploreContext } from '@contexts/exploreContext';
import LoadingScreen from '@components/LoadingScreen';

import InfiniteScroll from 'react-infinite-scroll-component';

const Items = () => {
    const { collection, tokens, isFetchingInitialData, isFetchingPage, fetchNextPage, hasNextPage } = useExploreContext();
    const pagination = usePagination(tokens, 21);
    const isTablet = useWindowSize().width < 1024;

    return (
        <div className="d-flex flex-column g-20">
            <div className="d-flex flex-wrap align-items-center justify-content-between g-10" ref={pagination.containerRef}>
                {isTablet && <StickyFilterBar bottom="#items" />}
                {/* <span className="text-sm">{pagination.showingOf()}</span> */}
                <span className="text-sm">{collection[0]?.onSaleCount}개 아이템</span>
                {/* <CustomSelect options={SORTING_OPTIONS} selected={sort} setSelected={setSort} variant="minimal" /> */}
            </div>
            <div>
                {isFetchingInitialData ? null :
                    <InfiniteScroll
                        dataLength={tokens.length}
                        next={fetchNextPage}
                        hasMore={hasNextPage}
                        style={{ overflow: 'hidden' }}
                    // loader={<h1>Loading</h1>}
                    // endMessage={<h1>Done</h1>}
                    >
                        <ItemsGrid className={styles.grid} items={tokens} />
                    </InfiniteScroll>}
            </div>
        </div>
    )
}

export default Items