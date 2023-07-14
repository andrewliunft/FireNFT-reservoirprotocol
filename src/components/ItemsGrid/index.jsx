// styling
import styles from './style.module.scss';

// components
import ItemsGridItem from './ItemsGridItem';

const ItemsGrid = ({ variant, items, isPrivate = false, className }) => {
    const data = variant === 'preview' ? items.slice(0, 8) : items;
    return (
        <div className={`${styles.grid} ${className ? className : ''} items-grid`} id="items">
            {
                data.map((item, index) => (
                    < ItemsGridItem key={index} item={item} index={index} isPrivate={isPrivate} />
                ))
            }
        </div>
    )
}

export default ItemsGrid