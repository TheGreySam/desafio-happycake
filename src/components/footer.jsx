import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { red } from '@mui/material/colors';

function ResponsiveAppBar() {

    return (
        <AppBar position="static" sx={{ bgcolor: red[500] }}>
            <Container  >
                <Toolbar  >
                    <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Happy Cake
                       
                    </Typography>
                        
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
