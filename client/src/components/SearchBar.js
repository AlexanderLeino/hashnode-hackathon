import React from 'react';
import Box from '@mui/material/Box';
import './SearchBar.css';
import { GiMagnifyingGlass } from 'react-icons/gi';

function SearchBar() {
  return (
    <div>
        <Box
            className='searchBar'
            sx={{
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
            }}>
            <GiMagnifyingGlass className='glass' />
            <input className='innerSearchBar'>
            </input>
        </Box>
    </div>
  )
}


export default SearchBar;
