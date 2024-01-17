import * as React from 'react';

import {AppBar ,Button ,Card ,CardActions , CardContent, CardMedia , CssBaseline ,Grid , Stack, Box, Toolbar, Typography, Container, Link } from '@mui/material';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import CameraIcon from '@mui/icons-material/PhotoCamera';

import Logo from '../../../../assets/Logo'
import Navbar from '../../../common_files/Layout/Navbar' 
import CompaniesList from '../../Company/CompaniesList'


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const BownerDashboard = ()=> {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />

      <main>
        {/* Hero unit */}
        
        <CompaniesList />
      </main>

    </ThemeProvider>
  );
}

export default BownerDashboard