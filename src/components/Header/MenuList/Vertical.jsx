// styled components
import { Nav, NavLink, NavWrapper, AccordionDetails } from './style';
import { StyledAccordionSummary, StyledAccordion } from '@ui/StyledAccordion';

// components
import { NavLink as Link } from 'react-router-dom';
import ResponsiveSidebar from '@ui/ResponsiveSidebar';

// hooks
import { useLocation } from 'react-router-dom';

// utils
import classNames from 'classnames';
import { memo } from 'react';
import { usePaperSdkContext } from '@contexts/paperSdkContext';
import { useAuth } from '@contexts/authContext';
import { LogInButton } from '..';

const Vertical = ({ links }) => {
    const location = useLocation();
    const { sdk, user, setUser } = usePaperSdkContext();
    const { isLogged, setIsLogged } = useAuth();

    return (
        <ResponsiveSidebar isMain>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <NavWrapper>
                    <Nav>
                        {
                            links.map((item, index) => (
                                item.isSingle ?
                                    <Link key={`menu-${item.name}`} to={item.url}>
                                        <NavLink className={classNames('main-link', { 'active': location.pathname === item.url })}>
                                            {item.name}
                                        </NavLink>
                                    </Link>
                                    : item.name !== '계정정보' ?
                                        <StyledAccordion key={`accordion${index}`}>
                                            <StyledAccordionSummary aria-controls={`panel${index}-content`}
                                                id={`panel${index}-header`}>
                                                <NavLink className="main-link">
                                                    {item.name} <i className="icon icon-angle-down" />
                                                </NavLink>
                                            </StyledAccordionSummary>
                                            <AccordionDetails>
                                                {
                                                    item.links.map(link => (
                                                        <Link key={`menu-${link.name}`} to={link.url}>
                                                            <NavLink
                                                                className={classNames('', { 'active': location.pathname === link.url })}>
                                                                {link.name}
                                                            </NavLink>
                                                        </Link>
                                                    ))
                                                }
                                            </AccordionDetails>
                                        </StyledAccordion> : null
                            ))
                        }
                        {isLogged ? <StyledAccordion key={`accordion${links.length}`}>
                            <StyledAccordionSummary aria-controls={`panel${links.length}-content`} id={`panel${links.length}-header`}>
                                계정정보 <i className="icon icon-angle-down" />
                            </StyledAccordionSummary>
                            <AccordionDetails>
                                <NavLink>
                                    {user.authDetails.email}
                                </NavLink>
                                <NavLink>
                                    {user.walletAddress}
                                </NavLink>
                            </AccordionDetails>
                        </StyledAccordion> : null}
                    </Nav>
                </NavWrapper>
                {!isLogged && LogInButton(sdk, setUser, setIsLogged)}
            </div>
        </ResponsiveSidebar>
    )
}

export default memo(Vertical);