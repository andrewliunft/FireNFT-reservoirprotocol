// styling
import styles from './style.module.scss';

// components
import Breadcrumbs from '@ui/BreadcrumbsNav';

const SimplePageHeader = ({ title, breadCrumbs, subtext }) => {
    return (
        <header className={styles.header}>
            <div className="container d-flex flex-column g-10">
                <h2 className={styles.header_title}>{title}</h2>
                {breadCrumbs ? <Breadcrumbs /> : null}
                {subtext ? <p style={{ whiteSpace: "pre-wrap" }}>{subtext}</p> : null}
            </div>
        </header>
    );
}

export const CollectionPageHeader = ({ title, collection, subtext }) => {
    return (
        <header className={styles.header}>
            <div className="container d-flex flex-column g-10">
                <h2 className={styles.header_title}>{title}</h2>
                <p>{collection?.description}</p>
                <br />
                <p>총 <b>{collection?.tokenCount}</b>개 • 구매가능 <b>{collection?.onSaleCount}</b>개 • 소유자 <b>{collection?.ownerCount}</b>명</p>
                <br />
                {subtext ? <p style={{ whiteSpace: "pre-wrap" }}>{subtext}</p> : null}
            </div>
        </header>
    );
}

export default SimplePageHeader