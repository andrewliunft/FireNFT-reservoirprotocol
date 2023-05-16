// components
import { NavLink } from 'react-router-dom';

// assets
import logo from '@assets/logo_text.svg';

const Logo = () => {
    return (
        <NavLink className="logo" to="/" >
            <img className="logo_img" src={logo} alt="FireNFT" />
            {/* <span className="logo_text h4">파이어</span> */}
        </NavLink>
    );
}

export default Logo