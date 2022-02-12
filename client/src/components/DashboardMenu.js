import React from 'react'
import './DashboardMenu.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaWpexplorer } from 'react-icons/fa'
import { AiOutlineUsergroupDelete } from 'react-icons/ai'


import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));




function DashboardMenu() {
  return (
    <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Box className='dashboardIcons'>
              <AiOutlineHome className='icon' size={40} />
              <FaWpexplorer className='icon' size={40} />
              <AiOutlineUsergroupDelete className='icon' size={40} />
            </Box>
          </Container>
        </React.Fragment>
    </div>
    )
}

export default DashboardMenu;


