// utils
import loadable from '@loadable/component'

// components
const Banner = loadable(() => import('@components/Banner'));
const Header = loadable(() => import('@components/Header'));
const Footer = loadable(() => import('@components/Footer'));
const PurchaseModal = loadable(() => import('@components/PurchaseModal'));

const AppLayout = ({ children }) => {
    return (
        <div>
            <Banner />
            <Header />
            {children}
            <Footer />
            <PurchaseModal />
        </div>
    )
}

export default AppLayout