// utils
import loadable from '@loadable/component'

// components
const Header = loadable(() => import('@components/Header'));
const Footer = loadable(() => import('@components/Footer'));
const BidModal = loadable(() => import('@components/BidModal'));
const PurchaseModal = loadable(() => import('@components/PurchaseModal'));

const AppLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
            <PurchaseModal />
            <BidModal />
        </div>
    )
}

export default AppLayout