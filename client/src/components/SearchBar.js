import React from 'react';
import Box from '@mui/material/Box';
import './SearchBar.css';

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
            <input className='innerSearchBar'>
            </input>
        </Box>
    </div>
  )
}


export default SearchBar;
