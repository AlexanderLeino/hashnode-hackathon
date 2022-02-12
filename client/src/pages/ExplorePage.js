import React from 'react'
import './ExplorePage.css'
import Grid from '@mui/material/Grid'
import { styled, alpha } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

// Button group
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

// Dropdown imports
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ColorToggleButton from '../components/Button'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const StyledMenu = styled((props) => (
<Menu
    elevation={0}
    anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
    }}
    transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
    }}
    {...props}
/>
))(({ theme }) => ({
'& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
    theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
    'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
    padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
    '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
    },
    '&:active': {
        backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity,
        ),
    },
    },
},
}));

function ExplorePage() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElOne, setAnchorElOne] = React.useState(null);
    const open = Boolean(anchorEl);
    const openOne = Boolean(anchorElOne);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseTwo = () => {
        setAnchorElOne(null)
    };

  return (
    <div className='explore-page-container'>
        <h1 className='explore-page-title'>Explore Page</h1>
            <Grid container spacing={2} className='explore-page-grid'>
                <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                    <Item>
                        <Item>100 Devs</Item>
                        <br />
                        <Item>[Picture]</Item>
                        <Item>Description</Item>
                    </Item>
                    <Item>Click here for more information</Item>
                </Grid>
                <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                    <Item>
                        <Item>100 Devs</Item>
                        <br />
                        <Item>[Picture]</Item>
                        <Item>Description</Item>
                    </Item>
                    <Item>Click here for more information</Item>
                </Grid>
                <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                    <Item>
                        <Item>100 Devs</Item>
                        <br />
                        <Item>[Picture]</Item>
                        <Item>Description</Item>
                    </Item>
                    <Item>Click here for more information</Item>
                </Grid>
            </Grid>
            <h2 className='start-title'>When Do You Want To Start?</h2>
            <Grid className='button-group-container'>
                <Grid item xs={12} className='button-group-description'>
                    {"Find a time you want to start and we'll narrow down the options for you"}
                </Grid>
                <Box
                sx={{
                    marginTop: '4rem',
                    marginBottom: '4rem'
                }}
                />
                <Grid item xs={12} className='button-time'>
                    <ColorToggleButton />
                </Grid>
            </Grid>
            <Grid container spacing={2} className='explore-page-grid'>
                <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                    <Item>
                        <Item>100 Devs</Item>
                        <br />
                        <Item>[Picture]</Item>
                        <Item>Description</Item>
                    </Item>
                    <Item>Click here for more information</Item>
                </Grid>
                <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                    <Item>
                        <Item>100 Devs</Item>
                        <br />
                        <Item>[Picture]</Item>
                        <Item>Description</Item>
                    </Item>
                    <Item>Click here for more information</Item>
                </Grid>
                <Grid item xs={12} md={4} sx={{ cursor: 'pointer' }}>
                    <Item>
                        <Item>100 Devs</Item>
                        <br />
                        <Item>[Picture]</Item>
                        <Item>Description</Item>
                    </Item>
                    <Item>Click here for more information</Item>
                </Grid>
            </Grid>
            {/* Grid for finding group filter */}
            <h2 className='find-group-title'>Find Group</h2>
            <Grid className='find-group-grid'>
                <Grid item xs={12} className='filter-description'>
                    {"When know it's hard to commit. You have high standards. That's why we made it easier to find your group. Fill out the form on the right to find the perfect match."}
                </Grid>
                <br />
                <Grid item xs={12}>
                <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                className='filter-inputs-container'
                >
                <TextField fullWidth label="Pick your frontend languages below" id="fullWidth" className='filter-input-field' /> 
                </Box>

                <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    className='find-group-filter-button'
                >
                    Frontend
                </Button>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} disableRipple>
                    HTML/CSS
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                    JavaScript
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                    React
                    </MenuItem>
                </StyledMenu>
                <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                >
                <TextField fullWidth label="Pick your backend languages below" id="fullWidth" className='filter-input-field' />
                </Box>
                <Button
                    id="demo-customized-button"
                    aria-controls={openOne ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openOne ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    className='find-group-filter-button'
                >
                    Backend
                </Button>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                    'aria-labelledby': 'demo-customized-button-one',
                    }}
                    anchorElOne={anchorElOne}
                    openOne={openOne}
                    onClose={handleCloseTwo}
                >
                    <MenuItem onClick={handleCloseTwo} disableRipple>
                    NodeJs
                    </MenuItem>
                    <MenuItem onClick={handleCloseTwo} disableRipple>
                    MongoDB
                    </MenuItem>
                    <MenuItem onClick={handleCloseTwo} disableRipple>
                    JavaScript
                    </MenuItem>
                </StyledMenu>
                </Grid>
                <Grid item xs={12} className='find-group-button'>
                    <ButtonGroup variant="contained">
                        <Button>Find Groups</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
    </div>
  )
}

export default ExplorePage