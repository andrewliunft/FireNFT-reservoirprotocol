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
import Grid from '@mui/material/Grid';

// constants
import { COLUMNS } from '@constants/ranking';

// utils
import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// data placeholder
import ranking from '@db/ranking';

// data
import { useCollections } from '@reservoir0x/reservoir-kit-ui';
import { useHotTokensContext } from '@contexts/hotTokensContext';

const Ranking = ({ rankingRef, period, category, type }) => {
    const dataByCategory = category.value === 'all' ? ranking : ranking.filter(item => item.categories && item.categories.includes(category.value));
    const navigate = useNavigate();
    const handleRowClick = (params, event) => {
        navigate(`/collection/${params.row.id}`)
    }

    const [sortByTime, setSortByTime] = useState('1DayVolume');

    let collectionQuery = {
        limit: 10,
        sortBy: sortByTime,
        includeTopBid: true,
        displayCurrency: '0xdAC17F958D2ee523a2206206994597C13D831ec7' // USDT
    }

    const { data, isValidating } = useCollections(collectionQuery, { fallbackData: [] });
    const { hotTokens, isLoading } = useHotTokensContext();

    let volumeRankData = data.map((item, idx) => {
        return {
            rank: idx + 1,
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
                day: item.floorAsk.price.amount.usd,
                // day: item.floorSale['1day'],
                // week: item.floorSale['7day'],
                // month: item.floorSale['30day'],
            }
        }
    })

    let hotTokenData = hotTokens.map((item, idx) => {
        return {
            rank: idx + 1,
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
                day: item.floorAsk.price.amount.usd,
                // day: item.floorSale['1day'],
                // week: item.floorSale['7day'],
                // month: item.floorSale['30day'],
            }
        }
    })

    const LongRankingTable = (data) => {
        return (
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <StyledTable
                        onRowClick={handleRowClick}
                        rows={data.slice(5, 10)}
                        columns={COLUMNS(period, category, type)}
                        disableSelectionOnClick
                        disableColumnMenu
                        hideFooterPagination
                        hideFooterSelectedRowCount
                        autoHeight
                        rowHeight={90}
                        headerHeight={30}
                        classes={{
                            columnHeader: 'h6',
                        }}
                        loading={isValidating} />
                </Grid>
            </Grid>
        )
    }

    const RankingTable = (data) => {
        return (
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <StyledTable
                        onRowClick={handleRowClick}
                        rows={data.slice(0, 5)}
                        columns={COLUMNS(period, category, type)}
                        disableSelectionOnClick
                        disableColumnMenu
                        hideFooterPagination
                        hideFooterSelectedRowCount
                        autoHeight
                        rowHeight={90}
                        headerHeight={30}
                        classes={{
                            columnHeader: 'h6',
                        }}
                        loading={isValidating} />
                </Grid>
                <Grid item xs={6}>
                    <StyledTable
                        onRowClick={handleRowClick}
                        rows={data.slice(5, 10)}
                        columns={COLUMNS(period, category, type)}
                        disableSelectionOnClick
                        disableColumnMenu
                        hideFooterPagination
                        hideFooterSelectedRowCount
                        autoHeight
                        rowHeight={90}
                        headerHeight={30}
                        classes={{
                            columnHeader: 'h6',
                        }}
                        loading={isValidating} />
                </Grid>
            </Grid>
        )
    }

    const tabs = [
        {
            label: '탑10 인기 NFT', key: 'top', children: RankingTable(hotTokenData)
        },
        {
            label: '거래량 상위 NFT', key: 'trending', children: RankingTable(volumeRankData)
        },
    ]

    return (
        <section>
            <div ref={rankingRef} className="container">
                <StyledTabs tabs={tabs} />
            </div>
        </section>

    )
}

export default memo(Ranking);