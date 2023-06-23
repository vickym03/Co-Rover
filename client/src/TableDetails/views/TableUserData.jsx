import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
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
import { useTheme } from "@mui/material/styles";
import { GridToolbar } from "@mui/x-data-grid";
function TableUserData() {
  const [pageSize, setPageSize] = React.useState(10);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState([]);
  const [showUpdate, setShowUpdate] = React.useState(false);

  const [formview, setFormview] = useState(false);
  const [tableview, setTableview] = useState(true);

  const classes = useStyles();
  const navigate = useNavigate();

  const handledashboardView = () => {
    navigate("/dashboard");
  };

  const handleFormView = () => {
    setFormview(true);
    setTableview(false);
  };
  const columnData = [
    {
      field: "id",
      headerName: "#",
      // flex:1,
      width: 80,
      sortable: false,
      disableExport: true,
        // renderCell: renderCellExpand,
    },
    {
      field: "UserName",
      headerName: "User Name",
      flex: 1,
        // renderCell: renderCellExpand,
    },
    {
      field: "Level",
      headerName: "Level",
      flex: 1,
        // renderCell: renderCellExpand,
    },

    {
      field: "Product",
      headerName: "Product",
      flex: 1,
        // renderCell: renderCellExpand,
    },
    {
      field: "Group",
      headerName: "Group",
      flex: 1,
        // renderCell: renderCellExpand,
    },
    {
      field: "BankName",
      headerName: "Bank Name",
      flex: 1,
        // renderCell: renderCellExpand,
    },

    {
      field: "BankCode",
      headerName: "Bank Code",
      flex: 1,
        // renderCell: renderCellExpand,
    },
    {
      field: "MobileNo",
      headerName: "Mobile No",
      flex: 1,
        // renderCell: renderCellExpand,
    },

    {
      field: "UserType",
      headerName: "UserType",
      flex: 1,
        // renderCell: renderCellExpand,
    },
    {
      field: "Active",
      headerName: "Active Status",
      flex: 1,
        // renderCell: renderCellExpand,
    },
  ];
  console.log("selectedRow", selectedRow);
  const rows = [
    {
      id: 1,
      UserName: "Snow",
      Level: 1,
      Product: "pen",
      Group: 1,
      BankName: "SBI",
      BankCode: "12Edssss",
      MobileNo: 1234567890,
      UserType: 1,
      Active: true,
    },
    {
      id: 3,
      UserName: "wind",
      Level: 11,
      Product: "peciel",
      Group: 31,
      BankName: "SBI",
      BankCode: "12Edssss",
      MobileNo: 1234567890,
      UserType: 31,
      Active: false,
    },
    {
      id: 2,
      UserName: "rain",
      Level: 155,
      Product: "pee",
      Group: 200,
      BankName: "SeeeeBI",
      BankCode: "12Edssss",
      MobileNo: 1234567890,
      UserType: 88,
      Active: true,
    },
  ];
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
  return (
    <>
      {tableview && (
        <div>
          <Grid>
            <Button onClick={handledashboardView}>Back</Button>
            <Typography variant="h4" sx={{ padding: "0px 0px 0px 30px " }}>
              User Details
            </Typography>
            <Button className={classes.addBtn} onClick={handleFormView}>
              Add
            </Button>
          </Grid>
          <Grid sx={{ padding: "40px", height: "600px" }}>
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
              rowsPerPageOptions={[20, 50, 100]}
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
          </Grid>
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
