import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CakeIcon from '@mui/icons-material/Cake';
import { red } from '@mui/material/colors';

const Home = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, m:50 }}>
        <Typography
          variant="h4"
          
          sx={{
            mr: 0,
            fontFamily: 'monospace',
            fontWeight: 500,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Bienvenido a
        </Typography>
        <Typography
          variant="h3"
          noWrap
          sx={{
            mr: 0,

            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Happy Cake

        </Typography>
        <h5>El lugar de los pasteles felices</h5>
        <CakeIcon sx={{ mr: 0, fontSize: 200, color: red[500] }} />

      </Box>
    </Container>
  )
}

export default Home;