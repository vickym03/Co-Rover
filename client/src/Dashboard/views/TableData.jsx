import React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  gridRowTreeSelector,
  useGridApiContext,
} from "@mui/x-data-grid";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "./style";
import { Box, Button, Chip, Grid } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import { sentIcon, readIcon } from "./Icons";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import Footer from "./Footer";

function TableData() {
  const [pageSize, setPageSize] = React.useState(10);
  // const [selectionModel, setSelectionModel] = React.useState([]);
  // const [selectedRow, setSelectedRow] = React.useState([]);

  const classes = useStyles();
  const d = "#0088FE";
  const columnData = [
    {
      field: "id",
      headerName: "#",
      // flex:1,
      width: 30,
      sortable: false,
      disableExport: true,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },
    {
      field: "appid",
      headerName: "App ID",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },
    {
      field: "username",
      headerName: "User Name",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },
    {
      field: "phoneno",
      headerName: "Phone Number",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },

    {
      field: "accno",
      headerName: "Account Number",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },
    {
      field: "mssgid",
      headerName: "Message ID",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },
    {
      field: "mssgtype",
      headerName: "Message Type",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },

    // rednder
    {
      field: "answer",
      headerName: "Answered",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "mssgno",
      headerName: "No of Messages",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },

    {
      field: "bank",
      headerName: "Bank",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },

    {
      field: "level",
      headerName: "Level",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },
    {
      field: "usertype",
      headerName: "User Type",
      flex: 1,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
    },

    {
      field: "rawres",
      headerName: "Raw Response",
      width: 125,
      headerClassName: "super-app-theme--header",

      //   renderCell: renderCellExpand,
      renderCell: (params) => {


        if (params.value === "isDelivered") {
          // return(<div> hello false</div>)
          return (
            <div>
              <Chip
                variant="outlined"
                label={params.value}
                sx={{ backgroundColor: "#6a994e", color: "white" }}
              />
            </div>
          );
        } else if (params.value === "isFailed") {
          return (
            <div>
              <Chip
                variant="outlined"
                sx={{ backgroundColor: "#CB4335  ", color: "white" }}
                label={params.value}
              />
            </div>
          );
        } else if (params.value === "isSend") {
          return (
            <div>
              <Chip
                variant="outlined"
                style={{ backgroundColor: "#1A5276 ", color: "white" }}
                label={params.value}
              />
            </div>
          );
        } else if (params.value === "isRead") {
          return (
            <div>
              <Chip
                variant="outlined"
                sx={{ backgroundColor: "#3498DB", color: "white" }}
                label={params.value}
              />
            </div>
          );
        } else if(params.value === "isClicked") {
          return (
            <Chip
              variant="outlined"
              sx={{ backgroundColor: "#A569BD", color: "white" }}
              label={params.value}
            />
          );
        }else if(params.value === "isReplied") {
          return (
            <Chip
              variant="outlined"
              sx={{ backgroundColor: "#E67E22", color: "white" }}
              label={params.value}
            />
          );
        }
      },
    },
  ];
  const rows = [
    {
      id: 1,
      username: "Tom",
      appid: 1234,
      phoneno: 1234567890,
      accno: 1234567,
      mssgid: 1233,
      mssgtype: "text",
      usertype: "user",
      rawres: "isDelivered",
      answer: 2,
      mssgno: 4,
      bank: "SBI",
      product: "Laptop",
      level: "Beginner",
    },
    {
      id: 2,
      username: "Tom",
      appid: 1234,
      phoneno: 1234567890,
      accno: 1234567,
      mssgid: 1233,
      mssgtype: "text",
      usertype: "user",
      rawres: "isSend",
      answer: 2,
      mssgno: 4,
      bank: "SBI",
      product: "Laptop",
      level: "Beginner",
    },
    {
      id: 3,
      username: "Tom",
      appid: 1234,
      phoneno: 1234567890,
      accno: 1234567,
      mssgid: 1233,
      mssgtype: "text",
      usertype: "user",
      rawres: "isRead",
      answer: 2,
      mssgno: 4,
      bank: "SBI",
      product: "Laptop",
      level: "Beginner",
    },
    {
      id: 4,
      username: "Jeery",
      appid: 2345,
      phoneno: 1234567890,
      accno: 1234567,
      mssgid: 1233,
      mssgtype: "media",
      usertype: "user",
      rawres: "isFailed",
      answer: 2,
      mssgno: 4,
      bank: "SBI",
      product: "Laptop",
      level: "Beginner",
    },
    {
      id: 5,
      username: "Tom",
      appid: 1234,
      phoneno: 1234567890,
      accno: 1234567,
      mssgid: 1233,
      mssgtype: "text",
      usertype: "user",
      rawres: "isClicked",
      answer: 2,
      mssgno: 4,
      bank: "SBI",
      product: "Laptop",
      level: "Beginner",
    },
    {
      id: 6,
      username: "Jeery",
      appid: 2345,
      phoneno: 1234567890,
      accno: 1234567,
      mssgid: 1233,
      mssgtype: "media",
      usertype: "user",
      rawres: "isReplied",
      answer: 2,
      mssgno: 4,
      bank: "SBI",
      product: "Laptop",
      level: "Beginner",
    },
  ];

  /*
         ***************Custom toolbar*******************
         **Columns , filter and download (CSV & PDF)**
         
  */

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
  // console.log("       {selectionModel}", selectionModel, selectedRow);

  return (
    <Grid sx={{ paddingTop: "20px" }}>
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
        {/* <Grid sx={{ padding: "30px" }}> */}
        <DataGrid
          //  className={classes.DataTable}
          //   checkboxSelection={del}
          // selectionModel={selectionModel}
          // onSelectionModelChange={(ids) => {
          //   setSelectionModel(ids);
          //   const selectedIDs = new Set(ids);
          //   const selectedRowData = rows.filter((row) =>
          //     selectedIDs.has(row.id)
          //   );
          //   setSelectedRow(selectedRowData);
          // }}
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
              // labelRowsPerPage: "RowsPerPage",
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
          disableRowSelectionOnClick={true}
          onCellClick={(params) => {
            // setSelectedRow(params.row);
            // setShowUpdate(modify);
            // setShowForm(modify);
            // setShowTable(!modify);
          }}
          pagination
          {...rows}
        />
       
        {/* </Grid> */}
      </Box>
    </Grid>
  );
}

export default TableData;
