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
import { Button, Grid } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";

function TableData() {
  const [pageSize, setPageSize] = React.useState(10);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState([]);

  const classes = useStyles();

  const columnData = [
    {
      field: "id",
      headerName: "id",
      // flex:1,
      width: 80,
      sortable: false,
      headerAlign: "center",
      disableExport: true,
      //   renderCell: renderCellExpand,
    },
    {
      field: "lastName",
      headerName: "lastName",
      flex: 1,
      //   renderCell: renderCellExpand,
    },
    {
      field: "firstName",
      headerName: "firstName",
      flex: 1,
      //   renderCell: renderCellExpand,
    },

    {
      field: "age",
      headerName: "age",
      flex: 1,
      //   renderCell: renderCellExpand,
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
  console.log("       {selectionModel}", selectionModel, selectedRow);

  return (
    <div>
      
      <Grid sx={{ padding: "30px" }}>
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
            // setShowUpdate(modify);
            // setShowForm(modify);
            // setShowTable(!modify);
          }}
          pagination
          {...rows}
        />
      </Grid>
    </div>
  );
}

export default TableData;
