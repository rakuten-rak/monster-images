import React from 'react';

import './search-style.css';

export const SearchBox = ({placeholder,searchChange}) => (
    <input className='search'
        type='search' 
        placeholder={placeholder}
        onChange={searchChange} 
        />
)