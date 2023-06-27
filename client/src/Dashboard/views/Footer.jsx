import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://corover.ai/">
        Co Rover ai
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   minHeight: '100vh',
      // }}
      >
        <CssBaseline />

        <Box
          component="footer"
          sx={{
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
            <Typography variant="body1"></Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
