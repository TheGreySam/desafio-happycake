import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
//import AdbIcon from '@mui/icons-material/Adb';
import { red } from '@mui/material/colors';
import CakeIcon from '@mui/icons-material/Cake';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/system';


function ResponsiveAppBar() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl"  sx={{ color: red[500] }}>
                <Toolbar disableGutters>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to='/'>
                                Home
                            </Link>
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to='/contacto'>
                                Contacto
                            </Link>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Happy Cake
                        <span>
                        <CakeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        </span>
                    </Typography>
                        
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
