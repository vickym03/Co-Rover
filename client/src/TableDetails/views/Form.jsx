import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
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
import { addUserRequest } from "../actions";

function Form(props) {
  const {
    setFormview,
    setTableview,
    selectedRow,
    showUpdate,
    setSelectedRow,
    setShowUpdate,
  } = props;
  const dispatch = useDispatch();
  const classes = useStyles();

  const [insertMode, setInsertMode] = useState(0);
  const [id, setId] = useState("");

  const getData = useSelector((state) => {
    return {
      loginData: state.usersReducer.login,
    };
  });

  const { loginData } = getData;


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
    level: yup.number().required("Required*").min(1, "Min 1 characters"),

    // Product
    product: yup
      .string()
      .required("Required*")
      .matches(/^[^\s]+(\s+[^\s]+)*$/, "No space")
      .min(2, "Min 2 characters")
      .max(50, "Max 50 characters"),

    // Group
    group: yup.number().required("Required*").min(1, "Min 1 characters"),

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
    usertype: yup.number().required("Required*").min(1, "Min 1 characters"),

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
      console.log("values", values);

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
          id,
          insertMode
        )
      );
    },
  });
  const handleTableView = () => {
    setFormview(false);
    setTableview(true);
    setSelectedRow([]);
    setShowUpdate(false);
  };
  const level = [
    { value: 1, label: "Beginner" },
    { value: 2, label: "intermediate" },
    { value: 3, label: "Advance" },
  ];

  const group = [
    { value: 1, label: "Work" },
    { value: 2, label: "Family" },
    { value: 1, label: "Friends" },
    { value: 2, label: "Others" },
  ];

  const usertype = [
    { value: 1, label: "Admin" },
    { value: 2, label: "Co-Admin" },
    { value: 3, label: "Group User" },
    { value: 4, label: "Others" },
  ];




  useEffect(()=>{
  if (showUpdate) {
    setInsertMode(1);
  } else {
    setInsertMode(0);
  }
  },[showUpdate])

  return (
    <div>
      <Grid sx={{ padding: "30px" }}>
        <Typography variant="h4" sx={{ padding: "0px 0px 30px 0px" }}>
          User Form
        </Typography>
        <Card sx={{ display: "flex" }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 3, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
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
                select
                margin="normal"
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
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                // className={classes.selectTextfiledsCustom}
                id="product"
                label={"Product"}
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
                size="medium"
                id="group"
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
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                margin="normal"
                size="medium"
                id="usertype"
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
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <Switch
              checked={formik.values.active}
              onChange={formik.handleChange}
              // disabled={showUpdate}
              formControlStyle={classes.formControl}
              name="activeStatus"
              label="Is Active"
              color="success"
            />

            <Grid padding={{ padding: "100px 0px 100px 0px" }}>
              <Grid sx={{ paddingRight: "28px " }}>
                <Button
                  className={classes.cancelBtn}
                  // startIcon={<AddIcon />}
                  onClick={handleTableView}
                >
                  cancel
                </Button>
              </Grid>
              <Grid sx={{ paddingRight: "150px " }}>
                <Button
                  className={classes.saveBtn}
                  onClick={formik.handleSubmit}
                  // startIcon={<AddIcon />}
                >
                  save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </div>
  );
}

export default Form;
