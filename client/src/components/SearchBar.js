import React from 'react';
import './SearchBar.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function SearchBar() {
  return (
    <div className='searchbar-container'>
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
  );
    </div>
  )
}

export default SearchBar;
