import * as React from 'react';

import {AppBar ,Button ,Card ,CardActions , CardContent, CardMedia , CssBaseline ,Grid , Stack, Box, Toolbar, Typography, Container, Link } from '@mui/material';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import CameraIcon from '@mui/icons-material/PhotoCamera';

import Logo from '../../../../assets/Logo'
import Navbar from '../../../common_files/Layout/Navbar' 

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const BownerDashboard = ()=> {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />

      <main>
        {/* Hero unit */}
        
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer"> */}
      {/*   <Typography variant="h6" align="center" gutterBottom> */}
      {/*     Footer */}
      {/*   </Typography> */}
      {/*   <Typography */}
      {/*     variant="subtitle1" */}
      {/*     align="center" */}
      {/*     color="text.secondary" */}
      {/*     component="p" */}
      {/*   > */}
      {/*     Something here to give the footer a purpose! */}
      {/*   </Typography> */}
      {/*    */}
      {/* </Box> */}
      {/* End footer */}
    </ThemeProvider>
  );
}

export default BownerDashboard