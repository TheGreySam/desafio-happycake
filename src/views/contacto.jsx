import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from '@mui/material/colors';

const theme = createTheme();

export default function Contacto() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" >
        <CssBaseline />
        <Box
          sx={{
            m:50,
            
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          
          <Typography component="h1" variant="h5">
            Cuentanos, ¿en que te podemos ayudar?
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
          id="outlined-multiline-flexible"
          label="Descripción"
          multiline
          margin="normal"
              required
              fullWidth
          maxRows={4}
        />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: red[500] }}
            >
              Enviar
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

