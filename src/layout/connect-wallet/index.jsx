// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import Spring from '@components/Spring';

// utils
import classNames from 'classnames';

// assets
import metamask from '@assets/wallets/metamask.webp';
import coinbase from '@assets/wallets/coinbase.webp';
import glow from '@assets/wallets/glow.webp';
import phantom from '@assets/wallets/phantom.webp';
import walletConnect from '@assets/wallets/walletconnect.webp';
import bitski from '@assets/wallets/bitski.webp';

const Wallet = () => {
    const wallets = [
        {
            name: 'MetaMask',
            image: metamask,
            tag: 'popular',
        },
        {
            name: 'Coinbase Wallet',
            image: coinbase,
        },
        {
            name: 'Glow',
            image: glow,
            tag: 'solana',
        },
        {
            name: 'Phantom',
            image: phantom,
            tag: 'solana',
        },
        {
            name: 'WalletConnect',
            image: walletConnect,
        },
        {
            name: 'Bitski',
            image: bitski,
        }
    ];

    return (
        <section className="mt-0">
            <div className="container">
                <div className={`${styles.wrapper} bg-secondary border-10`}>
                    <div className="d-flex flex-column g-15">
                        <h3>You need an Ethereum wallet to use Xchain</h3>
                        <p className={`${styles.subtitle} h6`}>
                            Connect with one of our available wallet providers or create a new one
                        </p>
                    </div>
                    <div className={styles.main}>
                        {
                            wallets.map((wallet, index) => (
                                <Spring key={index} index={index}>
                                    <div className={`${styles.main_item} border-hover border-hover--horizontal`}>
                                        <LazyImage className={styles.img} src={wallet.image} alt={wallet.name}/>
                                        <h5 className="main_item-title text-overflow">{wallet.name}</h5>
                                        {
                                            wallet.tag && (
                                                <span className={classNames(`${styles.label} label-tag`, {'accent': wallet.tag === 'popular'})}>
                                                {wallet.tag}
                                            </span>
                                            )
                                        }
                                    </div>
                                </Spring>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wallet