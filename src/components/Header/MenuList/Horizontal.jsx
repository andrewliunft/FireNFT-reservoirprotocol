// styled components
import { NavLink, NavLinkWrapper, Dropdown, UserLink } from './style';

// components
import Tooltip from '@mui/material/Tooltip';
import { NavLink as Link } from 'react-router-dom';
import { Fragment } from 'react';
import GradientBtn from '@ui/GradientBtn';
import { LogInButton } from '@components/Header'

// hooks
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// utils
import classNames from 'classnames';
import { memo } from 'react';
import { usePaperSdkContext } from '@contexts/paperSdkContext';

import { UserStatus } from "@paperxyz/embedded-wallet-service-sdk";
import { useAuth } from '@contexts/authContext';


const DropdownItem = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <Tooltip title={title}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            PopperProps={{
                sx: {
                    zIndex: 99999,
                    '& .MuiTooltip-tooltip': {
                        backgroundColor: 'transparent',
                        padding: 0,
                        marginTop: '0 !important',
                    }
                }
            }}
            placement="bottom">
            <NavLinkWrapper>
                {children}
            </NavLinkWrapper>
        </Tooltip>
    )
}

const Horizontal = ({ links }) => {
    const location = useLocation();
    const { sdk, user, setUser } = usePaperSdkContext();
    const { isLogged, setIsLogged } = useAuth();

    return (
        <div className="d-flex align-items-center justify-content-end g-25 flex-1">
            {
                links.map(item => {
                    const mainLink = item.links && item.links.find(link => link.isMain);
                    const DropdownMenu = () => {
                        return (
                            <Dropdown className="d-flex flex-column">
                                {
                                    item.links.map(link => (
                                        !link.isMain &&
                                        <Link key={`menu-${link.name}`}
                                            to={link.url}
                                            className={classNames('link', { 'active': location.pathname === link.url })}>
                                            {link.name}
                                        </Link>
                                    ))
                                }
                            </Dropdown>
                        )
                    }

                    return (
                        item.isSingle ?
                            <Link key={`menu-${item.name}`} to={item.url}>
                                <NavLink
                                    className={classNames('main-link', { 'active': location.pathname === item.url })}>
                                    {item.name}
                                </NavLink>
                            </Link>
                            :
                            (
                                item.name !== '계정정보' ?
                                    <div key={`menu-${item.name}`} style={{ height: '100%' }}>
                                        <DropdownItem title={<DropdownMenu />}>
                                            {
                                                mainLink ?
                                                    <Link to={mainLink.url}>
                                                        <NavLink
                                                            className={classNames('main-link', { 'active': location.pathname === mainLink.url })}>
                                                            {mainLink.name} <i className="icon icon-angle-down" />
                                                        </NavLink>
                                                    </Link>
                                                    :
                                                    <NavLink
                                                        className={classNames('main-link', { 'active': location.pathname === item.url })}>
                                                        {item.name} <i className="icon icon-angle-down" />
                                                    </NavLink>
                                            }
                                        </DropdownItem>
                                    </div>
                                    :
                                    <Fragment key="wrapper">
                                        {
                                            isLogged ? (
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <UserLink style={{ marginRight: '10px' }} className='btn btn--outline' onClick={() => {

                                                    }}>
                                                        <i className="icon icon-user" style={{ marginLeft: '10px', marginRight: '20px' }} />
                                                        <div>
                                                            <div>
                                                                {user.authDetails.email}
                                                            </div>
                                                            <div>
                                                                {user.walletAddress.slice(0, 8)}...
                                                            </div>
                                                        </div>
                                                    </UserLink>
                                                </div>
                                            ) : (
                                                (LogInButton(sdk, setUser, setIsLogged))
                                            )
                                        }
                                    </Fragment>
                            )
                    )
                })
            }
        </div >
    )
}

export default memo(Horizontal);