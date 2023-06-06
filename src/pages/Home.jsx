// utils
import { lazy } from 'react';

// components
import Title from '@components/Title';
import Hero from '@layout/home/Hero';
import { HotTokensContextAPI } from '@contexts/hotTokensContext';
// const NotableDrops = lazy(() => import('@layout/home/NotableDrops'));
// const BestSellers = lazy(() => import('@layout/home/BestSellers'));
// const Browse = lazy(() => import('@layout/home/Browse'));
const Ranking = lazy(() => import('@layout/home/Ranking'));
const CreateAndSell = lazy(() => import('@layout/home/CreateAndSell'));
// const Presentation = lazy(() => import('@layout/home/Presentation'));
// const Blog = lazy(() => import('@layout/home/Blog'));
import { useRef } from 'react';


const Home = () => {
    const rankingRef = useRef(null)
    const scrollToRanking = () => rankingRef.current.scrollIntoView({ behavior: 'smooth' })

    return (
        <>
            <Title title="Home" />
            <HotTokensContextAPI>
                <main>
                    <Hero rankingRef={rankingRef} />
                    {/* <NotableDrops/> */}
                    <Ranking rankingRef={rankingRef} period={{ value: 'day' }} category={{ value: 'all' }} type={{ value: 'krw' }} />
                    {/* <BestSellers/> */}
                    {/* <Browse/> */}
                    <CreateAndSell />
                    {/* <Presentation/> */}
                    {/* <Blog/> */}
                </main>
            </HotTokensContextAPI>
        </>
    )
}

export default Home