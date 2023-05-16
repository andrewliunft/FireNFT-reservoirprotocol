// components
import { Helmet } from 'react-helmet';

const Title = ({ title }) => {
    return (
        <Helmet>
            <title>{title} | FireNFT</title>
        </Helmet>
    )
}

export default Title