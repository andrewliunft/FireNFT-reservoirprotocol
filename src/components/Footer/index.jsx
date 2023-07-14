// styling
import styles from './style.module.scss';

// components
import Logo from '@components/Logo';
import { NavLink } from 'react-router-dom';
import SubscribeForm from '@components/SubscribeForm';

// utils
import { memo } from 'react';

// hooks
import { useLocation } from 'react-router-dom';

// constants
import { FOOTER_LINKS, SOCIAL_LINKS } from '@constants/links';

const SocialLinks = () => {
    return SOCIAL_LINKS.map((link, index) => (
        <li key={index}>
            <a className="tile tile--filled" href={link.url} target="_blank" rel="noreferrer noopener" aria-label={link.name}>
                <i className={`icon icon-${link.icon}`} />
            </a>
        </li>
    ))
}

const FooterNav = () => {
    const location = useLocation();

    return FOOTER_LINKS.map((item, index) => (
        <div className={styles.main_nav_item} key={index}>
            <h6>{item.title}</h6>
            <ul className="d-flex flex-column g-10">
                {
                    item.links.map((item, index) => (
                        <li className="text-bold text-sm" key={index}>
                            <NavLink to={item.url}
                                className={location.pathname === item.url ? styles.active : ''}>
                                {item.title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    ))
}

const Footer = () => {
    const buildDate = process.env.BUILD_DATE;

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.main_block}>
                        <div className="d-flex flex-column g-20">
                            <h4>최신 소식 받아보기</h4>
                            <SubscribeForm />
                        </div>
                        <div className="d-flex flex-column g-20" style={{ height: '100%' }}>
                            <h4 style={{ color: '#111' }}>.</h4>
                            <ul className="d-flex flex-wrap g-15" style={{ verticalAlign: 'bottom' }}>
                                <SocialLinks />
                            </ul>
                        </div>
                    </div>
                    <div className={styles.main_block}>
                        <div className={styles.main_about}>
                            <Logo />
                            <p className={`${styles.text} text-bold`}>
                                파이어는 신용카드를 사용한 NFT 구매를 지원합니다.
                            </p>
                        </div>
                        <nav className={styles.main_nav}>
                            <FooterNav />
                        </nav>
                    </div>
                </div>
                {
                    (buildDate) ?
                        <div className={styles.secondary}>
                            <p className={styles.copyright}>
                                최신 업데이트: {Date(buildDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                        : null
                }
            </div>
        </footer>
    )
}

export default memo(Footer);