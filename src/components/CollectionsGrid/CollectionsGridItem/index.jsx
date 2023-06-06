// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import { NavLink } from 'react-router-dom';
import Spring from '@components/Spring';

// hooks
import { useBidModalContext } from '@contexts/bidModalContext';

const CollectionsGridItem = ({ item, index }) => {
    return (
        <Spring index={index}>
            <div className={`${styles.wrapper} border-hover bg-primary`}>
                <div className={`${styles.media} square border-10`}>
                    <LazyImage src={item.image} alt={item.name} />
                </div>
                <div className={styles.main}>
                    <div className="d-flex align-items-center justify-content-between g-10">
                        <NavLink className="h6 text-overflow link-hover" to={"/collection/" + item.contract}>
                            {item.name}
                        </NavLink>
                    </div>
                    <div className={`${styles.main_price} text-sm text-bold`}>
                        <div className="d-flex g-10">
                            <span>최저가: {item.floorAskPrice?.amount.usd} USD</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className={`${styles.main_btn} text-accent text-sm link-hover link-hover--invert`}
                            onClick={console.log('hi')}>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </Spring>
    )
}

export default CollectionsGridItem