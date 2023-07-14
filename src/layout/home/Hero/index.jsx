// styling
import styles from './style.module.scss';

// components
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper';
import GradientBtn from '@ui/GradientBtn';
import Avatar from '@ui/Avatar';
import AnimatedText from 'react-animated-text-content';
import Spring from '@components/Spring';

// assets
import video from '@assets/home/hero/particles.mp4';

// data placeholder
// import hero from '@db/hero'
import { useHotTokensContext } from '@contexts/hotTokensContext';

const Hero = ({ rankingRef }) => {
    const { bannerTokens, isLoadingBannerTokens } = useHotTokensContext();

    if (isLoadingBannerTokens) return null;

    return (
        <section className={styles.hero}>
            <video src={video}
                className={styles.video}
                autoPlay loop muted disablePictureInPicture playsInline controls={false} />
            <div className={`${styles.hero_container} container`}>
                <div className={`${styles.media} bg-secondary border-hover`}>
                    <Swiper className={styles.media_slider}
                        loop={true}
                        modules={[Pagination, EffectFade, Autoplay]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        slidesPerView="auto"
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            }
                        }}
                        autoplay={{
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        speed={1300}
                        pagination={{
                            clickable: true,
                            horizontalClass: styles.pagination
                        }}>
                        {
                            bannerTokens.map((item, idx) => (
                                < SwiperSlide key={idx} >
                                    <div className="d-flex flex-column g-30">
                                        <div>
                                            <img className="border-10" src={item.sampleImages[0]} alt={item.name} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
                                        </div>
                                        <div className="d-flex flex-column g-5">
                                            <NavLink className="h4 link-hover" to={'/collection/' + item.id} >
                                                {item.name}
                                            </NavLink>
                                            <div className="d-flex align-items-center g-10">
                                                {/* <Avatar src={item.author.avatar}
                                                    isVerified={item.author.isVerified}
                                                    alt={item.author.name}
                                                    size="xs" /> */}
                                                {
                                                    item.twitterUsername &&
                                                    <NavLink className="text-sm text-light text-bold link-hover" to={"https://twitter.com/" + item.twitterUsername} target="_blank">
                                                        @{item.twitterUsername}
                                                    </NavLink>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={styles.main}>
                    <AnimatedText
                        type="words"
                        animationType="throw"
                        duration={0.5}
                        tag="h1"
                        includeWhiteSpaces>
                        NFT 신용카드 구매. 파이어.
                    </AnimatedText>
                    <Spring delay={600}>
                        <p className={styles.main_text}>
                            가장 쉬운 NFT 신용카드 구매. <br />
                            클릭 3번으로 NFT를 쉽게 구매할수 있습니다.
                        </p>
                    </Spring>
                    <div className={styles.main_buttons}>
                        <Spring delay={800}>
                            <GradientBtn onClick={() => {
                                rankingRef.current.scrollIntoView({ behavior: 'smooth' })
                            }}>탑10 인기 NFT</GradientBtn>
                        </Spring>
                        <Spring delay={1000}>
                            <NavLink className="btn btn--outline" to={"https://fire-nft.gitbook.io/firenft/"} target="_blank">파이어 알아보기</NavLink>
                        </Spring>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero