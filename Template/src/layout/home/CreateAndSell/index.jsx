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

const CreateAndSell = () => {
    const data = [
        {
            icon: wallet,
            title: 'NFT 선택',
            text: '마음에 드는 NFT를 선택하세요. 디지털 아트, 멤버십, 메타버스 땅 까지 여러분이 원하는 NFT를 선택하시면 됩니다.'
        },
        {
            icon: folder,
            title: '파이어 간편 결제 클릭하기 ',
            text: 'NFT를 선택하셨다면, 파이어 간편 결제를 클릭해서 구매하시면 됩니다.'
        },
        {
            icon: cloud,
            title: '파이얼 월렛에 추가',
            text: 'NFT를 개인 지갑에 보관해 주세요. 개인 지갑은 이메일주소와 비밀번호라고 생각하면 됩니다.'
        },
        {
            icon: tags,
            title: 'NFT 판매하기',
            text: 'NFT가 보관 되어 있는 지갑을 오픈씨와 블러와 연결해서 타인에게 판매 할 수 있습니다.'
        }
    ];

    return (
        <section>
            <Ticker text="쉽고 빠른 NFT 구매. 파이어." />
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