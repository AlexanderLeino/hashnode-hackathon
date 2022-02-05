import React, { useState } from 'react';
import './SidebarCategories.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SidebarCategories() {
    const [language, setLanguage] = useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
      };

  return (
    <div>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" className='categories'>Categories</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={10}>HTML/CSS</MenuItem>
                <MenuItem value={20}>Javascript</MenuItem>
                <MenuItem value={30}>React</MenuItem>
                <MenuItem value={40}>Python</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </div>
    )
}

export default SidebarCategories;
