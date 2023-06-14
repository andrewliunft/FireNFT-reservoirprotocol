// styled components
import { HeaderWrapper } from './style';

// components
import Logo from '@components/Logo';
import GradientBtn from '@ui/GradientBtn';
import SearchForm from '@ui/SearchForm';
import { NavLink, useNavigate } from 'react-router-dom';
import StyledModal from '@ui/StyledModal';
import Vertical from './MenuList/Vertical';
import Horizontal from './MenuList/Horizontal';

// hooks
import { useWindowSize } from 'react-use';
import { useState, useEffect } from 'react';
import { useSidebarContext } from '@contexts/sidebarContext';
import { useAuth } from '@contexts/authContext';

// utils
import { memo } from 'react';

// constants
import { HEADER_LINKS } from '@constants/links';

import { usePaperSdkContext } from '@contexts/paperSdkContext';

import { UserStatus } from "@paperxyz/embedded-wallet-service-sdk";

const placeholder = 'NFT 검색';

const MenuTrigger = ({ handler }) => {
    return (
        <button className="btn btn--icon" onClick={handler} aria-label="Menu">
            <i className="icon icon-bars-regular" />
        </button>
    )
}

const LogoutButton = () => {
    const { isLogged, setIsLogged } = useAuth();
    const { sdk, setUser } = usePaperSdkContext();

    return (
        <>
            {
                isLogged ? (
                    <button className="btn btn--icon"
                        aria-label="Logout"
                        onClick={() => {
                            setIsLogged(false);
                            localStorage.removeItem('user');
                            setUser(null);
                            sdk.auth.logout();
                        }}
                        style={{ alignSelf: 'center' }}>
                        <i className="icon icon-logout-regular" />
                    </button>
                ) : null
            }
        </>
    )
}

const CompactHeaderContent = ({ sidebarHandler, modal, modalHandler }) => {
    const { sdk, user, setUser } = usePaperSdkContext();
    const { isLogged, setIsLogged } = useAuth();

    return (
        <div className="d-flex g-10">
            <button className="btn btn--icon" onClick={() => modalHandler(true)} aria-label="Search">
                <i className="icon icon-search-regular" />
            </button>
            <MenuTrigger handler={sidebarHandler} />
            <StyledModal open={modal} onClose={() => modalHandler(false)}>
                <SearchForm className="field--outline" placeholder={placeholder} />
            </StyledModal>
            <LogoutButton />
        </div>
    )
}

export const LogInButton = (sdk, setUser, setIsLogged) => {
    return (
        <GradientBtn onClick={async () => {
            await sdk.auth.loginWithPaperModal()
            const user = await sdk.getUser();

            switch (user.status) {
                case UserStatus.LOGGED_OUT: {
                    // Call sdk.auth.loginWithPaperModal() to log the user in.
                    console.log("logged out when login attempted. this should not happen");
                    break;
                }
                case UserStatus.LOGGED_IN_WALLET_INITIALIZED: {
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                    setIsLogged(true);
                    break;
                }
                default:
                    break;
            }
        }}>
            로그인
        </GradientBtn>
    );
}

const TabletHeaderContent = ({ width, handler }) => {
    const { sdk, user, setUser } = usePaperSdkContext();
    const { isLogged, setIsLogged } = useAuth();

    return (
        <div className="main-wrapper d-flex align-items-center justify-content-end">
            <div className="form-wrapper">
                <SearchForm className="search" placeholder={placeholder} />
            </div>
            {!isLogged && LogInButton(sdk, setUser, setIsLogged)}
            <div className="d-flex g-20">
                {width < 1440 && <MenuTrigger handler={handler} />}
                <LogoutButton />
            </div>
        </div>
    )
}

const DesktopHeaderContent = ({ isLogged }) => {
    return (
        <div className="main-wrapper d-flex justify-content-between">
            <div className="form-wrapper">
                <SearchForm className="search" placeholder={placeholder} />
            </div>
            <div className="d-flex g-20">
                <Horizontal links={HEADER_LINKS} />
                <LogoutButton />
            </div>
        </div>
    )
}

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { openSidebar, headerRef, setIsHeaderFixed, setHeaderHeight } = useSidebarContext();
    const { width } = useWindowSize();

    useEffect(() => {
        const header = document.querySelector('.headroom-wrapper');
        const headerHeight = header.offsetHeight || 0;

        if (document.documentElement && header) {
            document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
            setHeaderHeight(headerHeight);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    const getHeaderContent = () => {
        switch (true) {
            case width < 768:
                return <CompactHeaderContent sidebarHandler={openSidebar} modal={modalOpen} modalHandler={setModalOpen} />;
            case width < 1440:
                return <TabletHeaderContent width={width} handler={openSidebar} />;
            default:
                return <DesktopHeaderContent />;
        }
    }

    return (
        <HeaderWrapper ref={headerRef} onPin={() => setIsHeaderFixed(true)} onUnpin={() => setIsHeaderFixed(false)}>
            <header>
                <div className="container d-flex align-items-center">
                    <Logo />
                    {getHeaderContent()}
                    {
                        width < 1440 && <Vertical links={HEADER_LINKS} />
                    }
                </div>
            </header>
        </HeaderWrapper>
    );
}

export default memo(Header);