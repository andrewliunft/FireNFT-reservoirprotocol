// utils
import {lazy} from 'react';

// components
import Title from '@components/Title';
import Hero from '@layout/home2/Hero';
const LiveAuctions = lazy(() => import('@layout/home2/LiveAuctions'));
const FeaturedCollections = lazy(() => import('@layout/home2/FeaturedCollections'));
const Features = lazy(() => import('@components/Features'));
const TopAuthors = lazy(() => import('@layout/home2/TopAuthors'));
const CTA = lazy(() => import('@components/CTA'));
const Brands = lazy(() => import('@layout/home2/Brands'));

const Home2 = () => {
    return (
        <>
            <Title title="Home"/>
            <main>
                <Hero/>
                <LiveAuctions/>
                <FeaturedCollections/>
                <Features/>
                <TopAuthors/>
                <CTA/>
                <Brands/>
            </main>
        </>
    )
}

export default Home2