// styling
import styles from './style.module.scss';

// components
import CustomSelect from '@ui/CustomSelect';
import Pagination from '@ui/Pagination';
import NothingFound from '@components/NothingFound';
import LoadingScreen from '@components/LoadingScreen';
import CollectionsGrid from '@components/CollectionsGrid/index';

// hooks
import usePagination from '@hooks/usePagination';
import { useExploreGridContext } from '@contexts/exploreGridContext';

import InfiniteScroll from 'react-infinite-scroll-component';

// constants
// import { CATEGORIES, TYPE, STATUS, SORTING_OPTIONS, PRICE_RANGE } from '@constants/explore';

const ExploreGridContent = () => {
    const {
        collections,
        isFetchingInitialData,
        isFetchingPage,
        fetchNextPage,
        hasNextPage,
    } = useExploreGridContext();
    const pagination = usePagination(collections, 21);

    return (
        <div className="section mt-0">
            <div className="container d-flex flex-column g-30" ref={pagination.containerRef}>
                {/* <div className={styles.sorting}>
                    <div className={styles.select}>
                        <CustomSelect setSelected={setPriceRange}
                            options={PRICE_RANGE}
                            selected={priceRange}
                            placeholder="Price range" />
                        <CustomSelect setSelected={setCategory}
                            options={CATEGORIES}
                            selected={category}
                            placeholder="Categories" />
                        <CustomSelect setSelected={setStatus}
                            options={STATUS}
                            selected={status}
                            placeholder="Status" />
                        <CustomSelect setSelected={setType}
                            options={TYPE}
                            selected={type}
                            placeholder="Type" />
                        <CustomSelect setSelected={setSort}
                            options={SORTING_OPTIONS}
                            selected={sort} />
                    </div>
                    <span>{pagination.showingOf()}</span>
                </div> */}
                <div>
                    {isFetchingInitialData ? null :
                        collections.length === 0 ?
                            <NothingFound />
                            : <InfiniteScroll
                                dataLength={collections.length}
                                next={fetchNextPage}
                                hasMore={hasNextPage}
                                style={{ overflow: 'hidden' }}
                            // loader={<h1>Loading</h1>}
                            // endMessage={<h1>Done</h1>}
                            >
                                <CollectionsGrid className={styles.grid} items={collections} />
                            </InfiniteScroll>}
                </div>
            </div>
        </div>
    )
}

export default ExploreGridContent