import React from 'react';
import Box from '@mui/material/Box';
import './SearchBar.css';

function SearchBar() {
  return (
    <div>
        <Box className='searchBar'>
            <input className='innerSearchBar'>
            </input>
        </Box>
    </div>
  )
}


export default SearchBar;
