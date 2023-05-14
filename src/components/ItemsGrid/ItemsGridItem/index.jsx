// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import { NavLink } from 'react-router-dom';
import Spring from '@components/Spring';

// hooks
import { useBidModalContext } from '@contexts/bidModalContext';

const ItemsGridItem = ({ item, index }) => {
    const { market, token } = item;
    const { openBidModal } = useBidModalContext();

    return (
        <Spring index={index}>
            <div className={`${styles.wrapper} border-hover bg-primary`}>
                <div className={`${styles.media} square border-10`}>
                    <LazyImage src={token.image} alt={token.name} />
                </div>
                <div className={styles.main}>
                    <div className="d-flex align-items-center justify-content-between g-10">
                        <NavLink className="h6 text-overflow link-hover" to={"/explore/token/" + token.contract + ":" + token.tokenId}>
                            {token.name}
                        </NavLink>
                    </div>
                    <div className={`${styles.main_price} text-sm text-bold`}>
                        <div className="d-flex g-10">
                            <span>{market.floorAsk.price.amount.usd} USD</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className={`${styles.main_btn} text-accent text-sm link-hover link-hover--invert`}
                            onClick={openBidModal}>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </Spring>
    )
}

export default ItemsGridItem