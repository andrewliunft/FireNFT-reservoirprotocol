// components
import ResponsiveSidebar from '@ui/ResponsiveSidebar';
import SearchForm from '@ui/SearchForm';
import Checkbox from '@ui/Checkbox';
import {Fragment} from 'react';
import ResetFilters from '@ui/ResetFilters';

// hooks
import {useFilterContext} from '@contexts/filterContext';
import {useWindowSize} from 'react-use';

const Sidebar = () => {
    const {search, setQuery, filters, changeFilters} = useFilterContext();
    const isTablet = useWindowSize().width < 1170;
    const SidebarWrapper = isTablet ? ResponsiveSidebar : Fragment;

    const categories = [
        {name: 'Ethereum', label: 'eth'},
        {name: 'Getting started', label: 'start'},
        {name: 'Account questions', label: 'account'},
        {name: 'NFT', label: 'nft'},
        {name: 'Pre-sale questions', label: 'sale'},
        {name: 'User safety', label: 'safety'},
        {name: 'Partners', label: 'partners'},
        {name: 'Developers', label: 'devs'},
    ];

    return (
        <SidebarWrapper>
            <div className="sidebar">
                <div className="sidebar_wrapper">
                    <div className="sidebar_block">
                        <h5>Search</h5>
                        <SearchForm placeholder="Type your question" value={search} handler={setQuery}/>
                    </div>
                    <div className="sidebar_block">
                        <div className="d-flex align-items-center justify-content-between">
                            <h5>Categories</h5>
                            <ResetFilters/>
                        </div>
                        <ul className="sidebar_list">
                            {
                                categories.map(category => (
                                    <li className="sidebar_list-item" key={category.label}>
                                        <Checkbox id={category.label}
                                                  checked={filters.includes(category.label)}
                                                  onChange={() => changeFilters(category.label)}/>
                                        <label htmlFor={category.label}>{category.name}</label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </SidebarWrapper>
    );
}

export default Sidebar