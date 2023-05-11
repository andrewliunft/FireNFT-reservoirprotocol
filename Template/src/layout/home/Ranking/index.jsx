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
import { useCollections } from '@reservoir0x/reservoir-kit-ui';

const Ranking = ({ period, category, type }) => {
    const dataByCategory = category.value === 'all' ? ranking : ranking.filter(item => item.categories && item.categories.includes(category.value));

    const [sortByTime, setSortByTime] = useState('1DayVolume');

    let collectionQuery = {
        limit: 5,
        sortBy: sortByTime,
        includeTopBid: true,
    }

    const { data, isValidating } = useCollections(collectionQuery, { fallbackData: [] });

    let refinedData = data.map(item => {
        return {
            id: item.id,
            collection: {
                id: item.id,
                name: item.name,
                img: item.image,
                isVerified: item.openseaVerificationStatus,
            },
            volume: {
                day: item.volume['1day'],
                week: item.volume['7day'],
                month: item.volume['30day'],
            },
            floor: {
                day: item.floorSale['1day'],
                week: item.floorSale['7day'],
                month: item.floorSale['30day'],
            }
        }
    })

    const tabs = [
        {
            label: '인기 급상승', key: 'top', children: <StyledTable
                rows={refinedData}
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
                loading={isValidating}
            />
        },
        {
            label: '거래량 순', key: 'trending', children: <StyledTable
                rows={refinedData}
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