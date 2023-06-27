import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { getRegisterRequest } from "../actions";
import Paper from '@mui/material/Paper';

const theme = createTheme();

export default function Register() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openExists, setOpenExists] = React.useState(false);

  const getData = useSelector((state) => {
    return {
      registerData: state.usersReducer.register,
    };
  });

  const { registerData } = getData;
  console.log(registerData);

  const validate = yup.object().shape({
    name: yup
      .string()
      .matches(/^\S*$/, "Enter without space")
      // .name("Error  name")
      .min(4, "name must be greater than 4 character")
      .max(100, "name must be lesser than 100 character")
      .required("Enter E-mail"),
    password: yup
      .string()
  
      .matches(/^\S*$/, "Enter without space")
      // .name("Error  password")
      .min(4, "Password must be greater than 4 character")
      .max(100, "Password must be lesser than 100 character")
      // .matches(/^%*$/, '* This field cannot contain white space and special character')
      .required("Enter password"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      console.log("d", values);
      const name = values.name;
      const password = values.password;
      dispatch(getRegisterRequest(name, password));
    },
  });

  React.useEffect(() => {
    if (registerData !== undefined && registerData.status === 201) {
      setOpen(true);
    } else {
      registerData !== undefined && setOpenExists(true);
    }
  }, [registerData]);
  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Collapse in={open}>
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Register Success
            </Alert>
          </Collapse>

          <Collapse in={openExists}>
            <Alert
              severity="info"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenExists(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              User Exists please sign up
            </Alert>
          </Collapse>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              id="name"
              name="name"
              label="Username"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
            />
            <TextField
              margin="normal"
              id="password"
              name="password"
              label="Password"
              type="text"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {" Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

  );
}
