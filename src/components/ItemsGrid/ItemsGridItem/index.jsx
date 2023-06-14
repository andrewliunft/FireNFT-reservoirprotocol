// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import { NavLink } from 'react-router-dom';
import Spring from '@components/Spring';

// hooks
import { usePaperSdkContext } from '@contexts/paperSdkContext';
import { USD_TO_KRW, formatNumberKorean } from '@utils/helpers';


const ItemsGridItem = ({ item, index }) => {
    const { market, token } = item;
    const { onClickPurchase } = usePaperSdkContext();

    if (market.floorAsk.price === null) {
        return null;
    }

    return (
        <Spring index={index}>
            <div className={`${styles.wrapper} border-hover bg-primary`}>
                <div className={`${styles.media} square border-10`}>
                    <LazyImage src={token.image} alt={token.name} />
                </div>
                <div className={styles.main}>
                    <div className="d-flex align-items-center justify-content-between g-10">
                        {/* <NavLink className="h6 text-overflow link-hover" to={"/explore/token/" + token.contract + ":" + token.tokenId}> */}
                        <NavLink className="h6 text-overflow">
                            {token.name || token.tokenId}
                        </NavLink>
                    </div>
                    <div className={`${styles.main_price} text-sm text-bold`}>
                        <div className="d-flex g-10">
                            <span>{formatNumberKorean(market.floorAsk.price.amount.usd * USD_TO_KRW * 1.1)} KRW</span>
                        </div>
                        <div>
                            <span>희귀도 {item.token.rarityRank}위</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className={`${styles.main_btn} text-accent text-sm link-hover link-hover--invert`}
                            onClick={() => {
                                onClickPurchase(token.contract, token.tokenId, market.floorAsk.source.domain)
                            }}>
                            바로 구매
                        </button>
                    </div>
                </div>
            </div>
        </Spring>
    )
}

export default ItemsGridItem