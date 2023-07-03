import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

function Copyright() {
  return (
    <center>
      <Typography variant="body2" color="	#808080">
        {"Copyright © "}
        <Link
          sx={{ textDecoration: "none" }}
          color="#808080"
          href="https://corover.ai/"
        >
          Co Rover ai
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </center>
  );
}

const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component="footer"
        sx={{
          bottom: 0,
          position: "fixed",
          width: "100%",
        }}
      >
        {/* <Item> */}
        <Paper elevation={6} sx={{ paddingBottom: "10px", paddingTop: "10px" }}>
          <Copyright />
        </Paper>
        {/* </Item> */}
        <Typography variant="body1"></Typography>
      </Box>
      {/* </Box>  */}
    </ThemeProvider>
  );
}
