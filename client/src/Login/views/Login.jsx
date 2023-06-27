import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getLoginRequest, resetLogin } from "../actions";
import MainPage from "./MainPage";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";

const theme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = useSelector((state) => {
    return {
      loginData: state.usersReducer.login,
    };
  });

  const { loginData } = getData;

  const [login, setLogin] = React.useState(true);
  const [dashboard, setDashboard] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openErr, setOpenErr] = React.useState(false);
  const [openNotFou, setOpenNotFou] = React.useState(false);

  // console.log("logi", loginData !== undefined && loginData.login);

  const validate = yup.object().shape({
    name: yup
      .string()
      .matches(/^\S*$/, "Enter without space")
      .min(4, "name must be greater than 4 character")
      .max(100, "name must be lesser than 100 character")
      .required("Enter username"),
    password: yup
      .string()
      .matches(/^\S*$/, "Enter without space")
      .min(4, "Password must be greater than 4 character")
      .max(100, "Password must be lesser than 100 character")
      .required("Enter password"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: (values, { resetForm }) => {
      const name = values.name;
      const password = values.password;
      dispatch(getLoginRequest(name, password));
      resetForm({ values: "" });
    },
  });

  React.useEffect(() => {
    if (
      loginData !== undefined &&
      loginData.login === true &&
      loginData.status === 200
    ) {
      setOpen(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else if (
      loginData !== undefined &&
      loginData.login === false &&
      loginData.status === 404
    ) {
      setOpenNotFou(true);
      dispatch(resetLogin());
    } else if (
      loginData !== undefined &&
      loginData.login === false &&
      loginData.status === 400
    ) {
      setOpenErr(true);
      dispatch(resetLogin());
    }
  });

  setTimeout(() => {
    setOpen(false);
    setOpenNotFou(false);
    setOpenErr(false);
  }, 10000);
  return (
    <>
      {login && (
        
        <ThemeProvider theme={theme}>
          <Box
              sx={{
                marginTop: 4,
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
                  Login Success
                </Alert>
              </Collapse>
              <Collapse in={openNotFou}>
                <Alert
                  severity="info"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenNotFou(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  User not found register for signup
                </Alert>
              </Collapse>
              <Collapse in={openErr}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenErr(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Login Failed
                </Alert>
              </Collapse>
              </Box>
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            
            <Box
              sx={{
                alignItems: "center",
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Card sx={{ padding: "30px" }}>
                <Box
                  component="form"
                  onSubmit={formik.handleSubmit}
                  noValidate
                  sx={{ mt: 5 }}
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
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    fullWidth
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>

                  <Grid container>
                    <Grid item xs></Grid>
                    <Grid item>
                      <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Box>
          </Container>
        </ThemeProvider>
      )}

      {/* {dashboard && loginData !== undefined && (
        <MainPage
          setDashboard={setDashboard}
          setLogin={setLogin}
          setOpen={setOpen}
          setOpenErr={setOpenErr}
          setOpenNotFou={setOpenNotFou}
        />
      )} */}
    </>
  );
}
