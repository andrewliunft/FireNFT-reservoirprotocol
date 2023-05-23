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


const Home = () => {
    return (
        <>
            <Title title="Home" />
            <HotTokensContextAPI>
                <main>
                    <Hero />
                    {/* <NotableDrops/> */}
                    <Ranking period={{ value: 'day' }} category={{ value: 'all' }} type={{ value: 'usd' }} />
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