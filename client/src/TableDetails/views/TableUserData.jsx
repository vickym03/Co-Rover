import React, { useEffect, useState } from "react";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import AddIcon from "@mui/icons-material/Add";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  gridRowTreeSelector,
  useGridApiContext,
} from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GridToolbar } from "@mui/x-data-grid";
import { getUsersRequest } from "../actions";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import Footer from "../../Dashboard/views/Footer";

function TableUserData() {
  const [pageSize, setPageSize] = React.useState(10);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState([]);
  const [showUpdate, setShowUpdate] = React.useState(false);

  const [formview, setFormview] = useState(false);
  const [tableview, setTableview] = useState(true);

  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = useSelector((state) => {
    return {
      // loginData: state.usersReducer.login,
      adduser: state.addUsersReducer.addUser,
      userData: state.addUsersReducer.userData,
    };
  });
  const { adduser, userData } = getData;

  const loginparse = sessionStorage.getItem("login");
  const login = JSON.parse(loginparse);

  const clientId = login !== null && login["data"]["clientId"];

  const handledashboardView = () => {
    navigate("/dashboard");
  };

  const handleFormView = () => {
    setFormview(true);
    setTableview(false);
    dispatch(getUsersRequest(clientId));
  };

  const columnData = [
    {
      field: "id",
      headerName: "#",
      // flex:1,
      width: 80,
      sortable: false,
      disableExport: true,
      headerClassName: "super-app-theme--header",

      // renderCell: renderCellExpand,
    },
    {
      field: "UserName",
      headerName: "User Name",
      flex: 1,
      headerClassName: "super-app-theme--header",

      // renderCell: renderCellExpand,
    },
    {
      field: "Level",
      headerName: "Level",
      flex: 1,
      // renderCell: renderCellExpand,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "Product",
      headerName: "Product",
      flex: 1,
      // renderCell: renderCellExpand,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Group",
      headerName: "Group",
      flex: 1,
      // renderCell: renderCellExpand,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "BankName",
      headerName: "Bank Name",
      flex: 1,
      // renderCell: renderCellExpand,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "BankCode",
      headerName: "Bank Code",
      flex: 1,
      // renderCell: renderCellExpand,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "MobileNo",
      headerName: "Mobile No",
      flex: 1,
      headerClassName: "super-app-theme--header",

      // renderCell: renderCellExpand,
    },

    {
      field: "UserType",
      headerName: "User Type",
      flex: 1,
      // renderCell: renderCellExpand,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Active",
      headerName: "Active Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.value === false) {
          // return(<div> hello false</div>)
          return (
            <div>
              <Chip
                variant="outlined"
                color="error"
                icon={<PersonOffOutlinedIcon />}
                label="In Active"
              />
            </div>
          );
        } else {
          // return(<div> hello true</div>)

          return (
            <div>
              <Chip
                variant="outlined"
                color="success"
                icon={<PermIdentityOutlinedIcon />}
                label="Active"
              />
            </div>
          );
        }
      },
    },
  ];
  console.log("userData", userData);
  const rows =
    userData &&
    userData !== undefined &&
    userData.length > 0 &&
    userData.map((data, index) => {
      return {
        id: index + 1,
        UserName: data.username,
        Level: data.level,
        Product: data.product,
        Group: data.group,
        BankName: data.bankname,
        BankCode: data.bankcode,
        MobileNo: data.mobileno,
        UserType: data.usertype,
        Active: data.active,
        clientId: data.clientId,
        slno: data.id,
      };
    });

  // console.log("rows", rows);
  function CustomToolbar() {
    // const apiRef = useGridApiContext();

    // const handleExport = (options) => apiRef.current.exportDataAsCsv(options);
    return (
      <GridToolbarContainer
        className={classes.toolBarDataGrid}
        style={{ marginTop: "-10px" }}
      >
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
      </GridToolbarContainer>
    );
  }

  useEffect(() => {
    dispatch(getUsersRequest(clientId));
  }, []);

  useEffect(() => {
    dispatch(getUsersRequest(clientId));
  }, [formview, tableview]);

  return (
    <>
      {tableview && (
        <div>
          <Grid>
            <Stack direction="row" spacing={2}>
              <IconButton color="success" onClick={handledashboardView}>
                <ArrowBackIcon />
              </IconButton>
            </Stack>

            <Typography variant="h4" sx={{ padding: "0px 0px 0px 30px " }}>
              Table
            </Typography>
            <Grid sx={{ padding: "0px 20px" }}>
              <Button
                className={classes.addBtn}
                onClick={handleFormView}
                startIcon={<AddCircleOutlinedIcon />}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <Grid sx={{ padding: "40px" }}>
            <Box
              sx={{
                height: 500,
                width: "100%",
                "& .super-app-theme--header": {
                  backgroundColor: "#2F6D80",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            >
              <DataGrid
                //  className={classes.DataTable}
                //   checkboxSelection={del}
                selectionModel={selectionModel}
                onSelectionModelChange={(ids) => {
                  setSelectionModel(ids);
                  const selectedIDs = new Set(ids);
                  const selectedRowData = rows.filter((row) =>
                    selectedIDs.has(row.id)
                  );
                  setSelectedRow(selectedRowData);
                }}
                rows={rows ? rows : []}
                columns={
                  columnData && columnData.length > 0
                    ? columnData.map((column) => ({
                        ...column,
                      }))
                    : []
                }
                autoHeight={false}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 20, 50]}
                componentsProps={{
                  pagination: {
                    labelRowsPerPage: "RowsPerPage",
                    showFirstButton: true,
                    showLastButton: true,
                  },
                }}
                slots={{ toolbar: GridToolbar }}
                disableColumnMenu={true}
                components={{
                  Toolbar: CustomToolbar,
                  NoRowsOverlay: () => <main>ErrorNoRecords</main>,
                  NoResultsOverlay: () => <main>ErrorNoRecords</main>,
                }}
                disableSelectionOnClick={false}
                onCellClick={(params) => {
                  setSelectedRow(params.row);
                  setShowUpdate(true);
                  setFormview(true);
                  setTableview(false);
                }}
                pagination
                {...rows}
              />
            </Box>
          </Grid>
          <Footer />
        </div>
      )}

      {formview && (
        <Form
          setFormview={setFormview}
          setTableview={setTableview}
          selectedRow={selectedRow && selectedRow}
          showUpdate={showUpdate}
          setSelectedRow={setSelectedRow}
          setShowUpdate={setShowUpdate}
        />
      )}
    </>
  );
}

export default TableUserData;
