// styled components
import StyledTable from './style';

// components
import {
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import Pagination from '@ui/Pagination';
import SectionHeader from '@components/SectionHeader';
import CustomSelect from '@ui/CustomSelect';
import StyledTabs from '@ui/StyledTabs';

// constants
import { COLUMNS } from '@constants/ranking';

// utils
import { memo, useState } from 'react';

// data placeholder
import ranking from '@db/ranking';

// data
import { useCollections } from '@reservoir0x/reservoir-kit-ui'



const Ranking = ({ period, category, type }) => {
    const dataByCategory = category.value === 'all' ? ranking : ranking.filter(item => item.categories && item.categories.includes(category.value));

    const [sortByTime, setSortByTime] = useState('1DayVolume');

    // let collectionQuery: Parameters<typeof useCollections>['0'] = {
    //     limit: 10,
    //     sortBy: sortByTime,
    //     includeTopBid: true,
    // }

    const tabs = [
        {
            label: '인기 급상승', key: 'top', children: <StyledTable
                rows={dataByCategory}
                columns={COLUMNS(period, category, type)}
                pageSize={5}
                disableSelectionOnClick
                disableColumnMenu
                autoHeight
                rowHeight={90}
                headerHeight={30}
                classes={{
                    columnHeader: 'h6',
                }}
            />
        },
        {
            label: '거래량 순', key: 'trending', children: <StyledTable
                rows={dataByCategory}
                columns={COLUMNS(period, category, type)}
                pageSize={5}
                disableSelectionOnClick
                disableColumnMenu
                autoHeight
                rowHeight={90}
                headerHeight={30}
                classes={{
                    columnHeader: 'h6',
                }}
            />
        },
    ]

    return (
        <section>
            <div className="container">
                <StyledTabs tabs={tabs} />
            </div>
        </section>

    )
}

export default memo(Ranking);