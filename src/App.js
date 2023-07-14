// GA
import ReactGA from 'react-ga4';

// styling
import './style.scss';

// libs styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'react-toastify/dist/ReactToastify.css';

// utils
import { lazy, Suspense } from 'react';
import { preventDefault } from '@utils/helpers';

// hooks
import { ReservoirKitProvider, CartProvider } from '@reservoir0x/reservoir-kit-ui'
import { useEffect } from 'react';

// context
import { BidModalContextAPI } from '@contexts/bidModalContext';
import { SidebarContextAPI } from '@contexts/sidebarContext';
import { AuthAPI } from '@contexts/authContext';
import { WagmiConfig } from 'wagmi';

// components
import LoadingScreen from '@components/LoadingScreen';
import AppLayout from '@components/AppLayout';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '@components/ScrollToTop';

import { createClient, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { PaperSdkContextProvider } from '@contexts/paperSdkContext';

// pages
const Home = lazy(() => import('@pages/Home'));
const Collection = lazy(() => import('@pages/Collection'));
const ExploreGrid = lazy(() => import('@pages/ExploreGrid'));
const PageNotFound = lazy(() => import('@pages/PageNotFound'));

const { provider, webSocketProvider } = configureChains(
    [mainnet],
    [publicProvider()],
)

const wagmiClient = createClient({
    provider,
    webSocketProvider,
})

const App = () => {
    useEffect(() => {
        preventDefault();
    }, []);

    const gaKey = process.env.REACT_APP_PUBLIC_GA;
    gaKey && ReactGA.initialize(gaKey);

    const CHANNEL_ID_PLUGIN_KEY = process.env.REACT_APP_CHANNEL_ID_PLUGIN_KEY;
    const RESERVOIR_API_KEY = process.env.REACT_APP_RESERVOIR_API_KEY

    // eslint-disable-next-line no-undef
    ChannelIO('boot', {
        "pluginKey": CHANNEL_ID_PLUGIN_KEY,
        "language": 'ko',
    });

    return (
        <ReservoirKitProvider
            options={{
                chains: [{
                    id: 1,
                    baseApiUrl: 'https://api.reservoir.tools',
                    default: true,
                    apiKey: { RESERVOIR_API_KEY }
                }],
                source: "reservoir.market"
            }}>
            <WagmiConfig client={wagmiClient}>
                <CartProvider>
                    <AuthAPI>
                        <PaperSdkContextProvider>
                            <BidModalContextAPI>
                                <SidebarContextAPI>
                                    <ScrollToTop />
                                    <AppLayout>
                                        <Suspense fallback={<LoadingScreen visible />}>
                                            <Routes>
                                                <Route path="/" element={<Home />} />
                                                <Route path="/collection/:id" element={<Collection />} />
                                                <Route path="/search/:query" element={<ExploreGrid />} />
                                                <Route path="*" element={<PageNotFound />} />
                                            </Routes>
                                        </Suspense>
                                    </AppLayout>
                                </SidebarContextAPI>
                            </BidModalContextAPI>
                        </PaperSdkContextProvider>
                    </AuthAPI>
                </CartProvider>
            </WagmiConfig>
        </ReservoirKitProvider >
    )
}

export default App
