import React, {useState} from 'react'
import './SidebarCategories.css'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SidebarCategories() {
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <Box marginTop={4} className='tech-stack-filter'> 
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tech</InputLabel >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
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
  );
}


