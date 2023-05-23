// styling
import styles from './style.module.scss';

// components
import Ticker from '@components/Ticker';
import LazyImage from '@components/LazyImage';
import Spring from '@components/Spring';

// assets
import wallet from '@assets/icons/wallet.svg';
import folder from '@assets/icons/folder.svg';
import cloud from '@assets/icons/cloud.svg';
import tags from '@assets/icons/tags.svg';
import eth from '@assets/icons/eth.svg';
import imx from '@assets/icons/imx.svg';
import verified from '@assets/icons/verified.svg';
import envelope from '@assets/icons/envelope.svg';
import location from '@assets/icons/location.svg';

const CreateAndSell = () => {
    const data = [
        {
            icon: tags,
            title: 'NFT 선택',
            text: '디지털 아트, 멤버십, 메타버스 땅 등 구매하고 싶은 NFT를 선택하세요.'
        },
        {
            icon: folder,
            title: '파이어 간편 결제 클릭하기 ',
            text: '구매하고 싶은 NFT 선택 후, 파이어 간편 결제로 구매할 수 있습니다.'
        },
        {
            icon: wallet,
            title: '파이얼 월렛에 추가',
            text: '구매한 NFT는 개인 지갑에 안전하게 보관해주세요. 개인 지갑은 아이디와 같은 역활을 합니다.'
        },
        {
            icon: location,
            title: 'NFT 판매하기',
            text: 'Paper 지갑에 보관된 NFT는 OpenSea와 Blur에서 판매할 수 있습니다.'
        }
    ];

    return (
        <section>
            <Ticker text="NFT 신용카드 구매. 파이어." />
            <div className="container">
                <div className={styles.list}>
                    {
                        data.map((item, index) => (
                            <Spring className={styles.list_item} key={index} index={index}>
                                <LazyImage className={styles.img} src={item.icon} alt={item.title} effect="opacity" />
                                <h5 className={styles.title}>{item.title}</h5>
                                <p className={styles.text}>{item.text}</p>
                            </Spring>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CreateAndSell