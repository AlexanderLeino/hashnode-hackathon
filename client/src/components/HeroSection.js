import React from 'react'
import './HeroSection.css'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function HeroSection() {
  return (
    <div className='herosection-container'>
        <h1 className='featured-title'>Featured Groups</h1>
            <Grid container spacing={2}>
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
    </div>
    )
}

export default HeroSection;
