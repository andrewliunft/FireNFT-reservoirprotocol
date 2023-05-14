// styling
import styles from './style.module.scss';

// hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// utils
import PropTypes from 'prop-types';

const SearchForm = ({ placeholder = 'Search', className, handler }) => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleChange = e => {
        setValue(e.target.value);
        handler && handler(e.target.value);
    }

    const handleReset = () => {
        setValue('');
        handler && handler('');
    }

    const HandleSearch = () => {
        navigate(`/search/${value}`);
    }

    return (
        <form className={`${styles.form} search-form field bg-tertiary ${className || ''}`} onSubmit={HandleSearch}>
            <input className="text-overflow"
                type="text"
                placeholder={placeholder}
                onChange={handleChange} />
            <button className={`${value.length !== 0 ? 'visible' : ''}`}
                type="reset"
                aria-label="Reset form"
                onClick={handleReset}>
                <i className="icon icon-xmark" />
            </button>
            <button type="submit" aria-label="Search">
                <i className="icon icon-search" />
            </button>
        </form>
    )
}

SearchForm.propTypes = {
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    handler: PropTypes.func,
}

export default SearchForm