// components
import {Helmet} from 'react-helmet';

const Title = ({title}) => {
    return (
        <Helmet>
            <title>{title} | Xchain NFT Marketplace React Template</title>
        </Helmet>
    )
}

export default Title