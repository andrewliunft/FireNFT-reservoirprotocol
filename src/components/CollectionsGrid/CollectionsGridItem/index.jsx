// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import { NavLink } from 'react-router-dom';
import Spring from '@components/Spring';
import { USD_TO_KRW, formatNumberKorean } from '@utils/helpers';

const CollectionsGridItem = ({ item, index }) => {
    return (
        <Spring index={index}>
            <div className={`${styles.wrapper} border-hover bg-primary`}>
                <div className={`${styles.media} square border-10`}>
                    <LazyImage src={item.image} alt={item.name} />
                </div>
                <div className={styles.main}>
                    <div className="d-flex align-items-center justify-content-between g-10">
                        <NavLink className="h6 text-overflow link-hover" to={"/collection/" + item.id}>
                            {item.name}
                        </NavLink>
                    </div>
                    {item.onSaleCount === '0' ?
                        <div className={`${styles.main_price} text-sm text-bold`}>
                            <div className="d-flex g-10">
                                <span>구매불가</span>
                            </div>
                        </div> :
                        <div className={`${styles.main_price} text-sm text-bold`}>
                            <div className="d-flex g-10">
                                <span>최저가: {formatNumberKorean(item.floorAsk?.price.amount.usd * USD_TO_KRW * 1.1)} KRW</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Spring>
    )
}

export default CollectionsGridItem