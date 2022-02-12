import React from 'react';
import './SearchBar.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function SearchBar() {
  return (
    <div className='searchbar-container'>
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
          }}
        >
      <TextField fullWidth label="Search" id="fullWidth" />
        </Box>
        <Button variant="contained" className='search-button'>Search</Button>
    </div>
  )
}

export default SearchBar;
