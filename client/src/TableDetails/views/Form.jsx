import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useStyles } from "./style";
import * as yup from "yup";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { addUserRequest, getUsersRequest, resetAddUsers } from "../actions";
import SaveIcon from "@mui/icons-material/Save";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { IconButton } from "@mui/material";
import Footer from "../../Dashboard/views/Footer";

function Form(props) {
  const {
    setFormview,
    setTableview,
    selectedRow,
    showUpdate,
    setSelectedRow,
    setShowUpdate,
  } = props;

  console.log("setFormview", typeof setFormview);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [insertMode, setInsertMode] = useState(0);
  const [save, setSave] = React.useState(false);
  const [openErr, setOpenErr] = React.useState(false);
  const [updatedStatus, setUpdatedStatus] = React.useState(false);
  const [updatedStatuSave, setUpdatedStatuSave] = React.useState(false);

  const getData = useSelector((state) => {
    return {
      // loginData: state.usersReducer.login,
      adduser: state.addUsersReducer.addUser,
      userData: state.addUsersReducer.userData,
      adduserStatus: state.addUsersReducer.adduserStatus,
    };
  });

  const { loginData, adduser, userData, adduserStatus } = getData;

  const loginparse = localStorage.getItem("login");
  const login = JSON.parse(loginparse);

  const clientId = login !== null && login["data"]["clientId"];

  // const {
  //   id,
  //   UserName,
  //   Level,
  //   Product,
  //   Group,
  //   BankName,
  //   BankCode,
  //   MobileNo,
  //   UserType,
  //   Active,
  // } = (selectedRow !== undefined) & selectedRow;

  const validateUser = yup.object().shape({
    // UserName
    username: yup
      .string()
      .required("Required*")
      .matches(/^[^\s]+(\s+[^\s]+)*$/, "No space")
      .min(4, "Min 4 characters")
      .max(50, "Max 50 characters"),

    // level
    level: yup
      .string()
      .required("Required*")
      .min(2, "Min 2 characters")
      .max(50, "Max 50 characters"),

    // Product
    product: yup
      .string()
      .required("Required*")
      .matches(/^[^\s]+(\s+[^\s]+)*$/, "No space")
      .min(2, "Min 2 characters")
      .max(50, "Max 50 characters"),

    // Group
    group: yup
      .string()
      .required("Required*")
      .min(2, "Min 2 characters")
      .max(50, "Max 50 characters"),

    // BankName
    bankname: yup
      .string()
      .matches(/^[^\s]+(\s+[^\s]+)*$/, "No space")
      .required("Required*")
      .min(2, "Min 2 characters")
      .max(50, "Max 50 characters"),

    // BankCode
    bankcode: yup
      .string()
      .matches(/^[^\s]+(\s+[^\s]+)*$/, "No space")
      .required("Required*")
      .min(2, "Min 2 characters")
      .max(50, "Max 50 characters"),

    // MobileNo
    mobileno: yup
      .string()
      .matches(/^[^\s]+(\s+[^\s]+)*$/, "No space")
      .matches(/^\d*?\d*$/, "No Char")
      .required("Required*")
      .min(10, "Min 10 characters")
      .max(16, "Max 16 characters"),

    // UserType
    usertype: yup
      .string()
      .required("Required*")
      .min(2, "Min 2 characters")
      .max(50, "Max 50 characters"),

    //  Active
    active: yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      username: selectedRow.UserName ? selectedRow.UserName : "",
      level: selectedRow.Level ? selectedRow.Level : "",
      product: selectedRow.Product ? selectedRow.Product : "",
      group: selectedRow.Group ? selectedRow.Group : "",
      bankname: selectedRow.BankName ? selectedRow.BankName : "",
      bankcode: selectedRow.BankCode ? selectedRow.BankCode : "",
      usertype: selectedRow.UserType ? selectedRow.UserType : "",
      mobileno: selectedRow.MobileNo ? selectedRow.MobileNo : "",
      active: selectedRow.Active ? selectedRow.Active : false,
    },

    validationSchema: validateUser,
    onSubmit: (values) => {
      const {
        username,
        level,
        product,
        group,
        bankname,
        bankcode,
        usertype,
        mobileno,
        active,
      } = values;
      // console.log("values", values);

      dispatch(
        addUserRequest(
          username,
          level,
          product,
          group,
          bankname,
          bankcode,
          usertype,
          mobileno,
          active,
          selectedRow.id,
          insertMode,
          clientId
        )
      );

      dispatch(getUsersRequest(clientId));
      setSave(false);
      setOpenErr(false);
      setUpdatedStatus(false);
      dispatch(resetAddUsers());

      // setFormview(false);
      // setTableview(true);

      setTimeout(() => {
        // navigate("/dashboard");
        // setFormview(false);
        // setTableview(true);
        dispatch(resetAddUsers());
      }, 5000);
    },
  });
  const handleTableView = () => {
    setFormview(false);
    setSave(false);
    setOpenErr(false);
    setUpdatedStatus(false);
    setTableview(true);
    setSelectedRow([]);
    setShowUpdate(false);
    dispatch(getUsersRequest(clientId));
    dispatch(resetAddUsers());
  };
  const level = [
    { value: 1, label: "Beginner" },
    { value: 2, label: "intermediate" },
    { value: 3, label: "Advance" },
  ];

  const group = [
    { value: 1, label: "Work" },
    { value: 2, label: "Family" },
    { value: 3, label: "Friends" },
    { value: 4, label: "Others" },
  ];

  const usertype = [
    { value: 1, label: "Admin" },
    { value: 2, label: "Co-Admin" },
    { value: 3, label: "Group User" },
    { value: 4, label: "Others" },
  ];

  useEffect(() => {
    if (showUpdate) {
      setInsertMode(1);
    } else {
      setInsertMode(0);
    }
  }, [showUpdate]);

  useEffect(() => {
    dispatch(getUsersRequest(clientId));
  }, [insertMode]);

  useEffect(() => {
    dispatch(getUsersRequest(clientId));
  }, []);

  // useEffect(() => {
  //   if (selectedRow.Active === "Active") setActiveStatus(true);
  //   else setActiveStatus(false);
  // }, [selectedRow]);

  // console.log("sww", selectedRow.Active , activeStatus)

  React.useEffect(() => {
    if (adduser !== undefined && adduserStatus && adduser.status === 200) {
      setSave(true);

      setTimeout(() => {
        // navigate("/dashboard");
        setFormview(false);
        setTableview(true);
        dispatch(resetAddUsers());
      }, 1000);
    } else if (
      adduser !== undefined &&
      adduserStatus &&
      adduser.status === 201
    ) {
      setUpdatedStatus(true);
      setTimeout(() => {
        setFormview(false);
        setTableview(true);
        dispatch(resetAddUsers());
      }, 1000);
    } else if (
      adduser !== undefined &&
      adduserStatus &&
      adduser.status === 403
    ) {
      setOpenErr(true);
    } else if (
      adduser !== undefined &&
      adduserStatus &&
      adduser.status === 405
    ) {
      setUpdatedStatuSave(true);
    }
  }, [adduser]);

  return (
    <div>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          p: 4,
        }}
      >
        <Collapse in={save}>
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setSave(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            User add successfully !
          </Alert>
        </Collapse>
        <Collapse in={updatedStatus}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setUpdatedStatus(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            User data updated !
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
            Can't update. Mobile exists with another User {}
          </Alert>
        </Collapse>
        <Collapse in={updatedStatuSave}>
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setUpdatedStatuSave(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Can't save. Mobile exists with another User
          </Alert>
        </Collapse>
      </Box>

      <Grid sx={{ padding: "30px" }}>
        <Typography variant="h4" sx={{ padding: "0px 0px 30px 0px" }}>
          {/* User Form                                         */}
        </Typography>
        <Card sx={{ display: "flex", paddingTop: "40px" }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 3, width: "28ch" },
            }}
            // noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                InputProps={{ sx: { borderRadius: 10 } }}
                // className={classes.selectTextfiledsCustom}
                id="username"
                label={"User Name"}
                // disabled={update ? true : false}
                name="username"
                disabled={showUpdate}
                type="text"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.username}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />

              <TextField
                // className={classes.selectTextfiledsCustom}
                InputProps={{ sx: { borderRadius: 10 } }}
                id="bankname"
                label={"Bank Name"}
                // disabled={update ? true : false}
                name="bankname"
                type="text"
                autoComplete="off"
                onChange={formik.handleChange}
                disabled={showUpdate}
                value={formik.values.bankname}
                error={
                  formik.touched.bankname && Boolean(formik.errors.bankname)
                }
                helperText={formik.touched.bankname && formik.errors.bankname}
              />
              <TextField
                // className={classes.selectTextfiledsCustom}
                id="bankcode"
                label={"Bank Code"}
                disabled={showUpdate}
                InputProps={{ sx: { borderRadius: 10 } }}
                // disabled={update ? true : false}
                name="bankcode"
                type="text"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.bankcode}
                error={
                  formik.touched.bankcode && Boolean(formik.errors.bankcode)
                }
                helperText={formik.touched.bankcode && formik.errors.bankcode}
              />
              <TextField
                // className={classes.selectTextfiledsCustom}
                id="mobileno"
                label={"Mobile Number"}
                InputProps={{ sx: { borderRadius: 10 } }}
                // disabled={update ? true : false}
                name="mobileno"
                type="number"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.mobileno}
                error={
                  formik.touched.mobileno && Boolean(formik.errors.mobileno)
                }
                helperText={formik.touched.mobileno && formik.errors.mobileno}
              />
            </div>
            <div>
              <TextField
                // className={classes.selectTextfiledsCustom}
                id="product"
                label={"Product"}
                InputProps={{ sx: { borderRadius: 10 } }}
                // disabled={update ? true : false}
                name="product"
                type="text"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.product}
                error={formik.touched.product && Boolean(formik.errors.product)}
                helperText={formik.touched.product && formik.errors.product}
              />

              <TextField
                select
                margin="normal"
                InputProps={{ sx: { borderRadius: 10 } }}
                size="medium"
                id="level"
                label="Level"
                name="level"
                type="number"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.level}
                error={formik.touched.level && Boolean(formik.errors.level)}
                helperText={formik.touched.level && formik.errors.level}
              >
                {level.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                margin="normal"
                size="medium"
                id="group"
                InputProps={{ sx: { borderRadius: 10 } }}
                label={"Group"}
                // disabled={update ? true : false}
                name="group"
                type="number"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.group}
                error={formik.touched.group && Boolean(formik.errors.group)}
                helperText={formik.touched.group && formik.errors.group}
              >
                {group.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                margin="normal"
                size="medium"
                id="usertype"
                InputProps={{ sx: { borderRadius: 10 } }}
                label={"User Type"}
                // disabled={update ? true : false}
                name="usertype"
                type="number"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.usertype}
                error={
                  formik.touched.usertype && Boolean(formik.errors.usertype)
                }
                helperText={formik.touched.usertype && formik.errors.usertype}
              >
                {usertype.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ padding: "0px 0px 0px 20px" }}
            >
              {/* <Typography>Off</Typography> */}
              <Grid>
                <Switch
                  checked={formik.values.active}
                  onChange={formik.handleChange}
                  // disabled={showUpdate}
                  formControlStyle={classes.formControl}
                  name="active"
                  label="Is Active"
                  color="success"
                />
              </Grid>
              <Typography>
                {formik.values.active ? "Active" : "In Active"}
              </Typography>
            </Stack>

            <Grid padding={{ padding: "50px 0px 100px 0px" }}>
              <Grid sx={{ paddingRight: "28px " }}>
                <Button
                  className={classes.cancelBtn}
                  startIcon={<HighlightOffSharpIcon />}
                  onClick={handleTableView}
                >
                  cancel
                </Button>
              </Grid>
              <Grid sx={{ paddingRight: "180px " }}>
                <Button
                  className={classes.saveBtn}
                  onClick={formik.handleSubmit}
                  startIcon={<SaveIcon />}
                >
                  save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
      <Footer />
    </div>
  );
}

export default Form;

Form.prototypes = {
  setFormview: PropTypes.function,
  setTableview: PropTypes.function,
  selectedRow: PropTypes.function,
  showUpdate: PropTypes.function,
  setSelectedRow: PropTypes.function,
  setShowUpdate: PropTypes.function,
};
