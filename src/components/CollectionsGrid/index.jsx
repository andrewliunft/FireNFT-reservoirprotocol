// styling
import styles from './style.module.scss';

// components
import CollectionsGridItem from './CollectionsGridItem';

const CollectionsGrid = ({ variant, items, isPrivate = false, className }) => {
    const data = variant === 'preview' ? items.slice(0, 8) : items;

    return (
        <div className={`${styles.grid} ${className ? className : ''} items-grid`} id="items">
            {
                data.map((item, index) => (
                    <CollectionsGridItem key={item.id} item={item} index={index} isPrivate={isPrivate} />
                ))
            }
        </div>
    )
}

export default CollectionsGrid