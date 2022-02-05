import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function HeroSection() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <h1>Featured Groups</h1>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <Item>100 Devs</Item>
                        <br />
                        <Item>[Picture]</Item>
                        <Item>Description</Item>
                    </Item>
                    <Item>Click here for more information</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <Item>100 Devs</Item>
                        <br />
                        <Item>[Picture]</Item>
                        <Item>Description</Item>
                    </Item>
                    <Item>Click here for more information</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <Item>100 Devs</Item>
                        <br />
                        <Item>[Picture]</Item>
                        <Item>Description</Item>
                    </Item>
                    <Item>Click here for more information</Item>
                </Grid>
            </Grid>
        </Box>
    </div>
    )
}

export default HeroSection;
