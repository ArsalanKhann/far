import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DataTable = () => {
  const history = useNavigate();

  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState([]);
  const [allRows, setAllRows] = useState(tableData);
  const [rowsToShow, setRowsToShow] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

  const columns = [
    { field: "id", headerName: "Asset No.", width: 140 },
    { field: "SERIAL_NUMBER", headerName: "Serial Number", width: 150 },
    { field: "DESCRIPTION", headerName: "Description", width: 150 },
    { field: "MAJOR_CATEGORY", headerName: "Major Category", width: 190 },
    { field: "MINOR_CATEGORY", headerName: "Minor Category", width: 190 },
    { field: "PURCHASE_DATE", headerName: "Purchase Date", width: 190 },
    { field: "PURCHASE_VALUE_RS", headerName: "Value", width: 150 },
    { field: "WDV", headerName: "WDV", width: 120 },
    { field: "LOCATION_CODE", headerName: "Location Code", width: 170 },
    { field: "BRANCH_NAME", headerName: "Branch Name", width: 150 },
    { field: "BRANCH_CODE", headerName: "Branch Code", width: 150 },
    { field: "QTY_AS_FAR", headerName: "Quantity As Far", width: 150 },
    {
      field: "action",
      headerName: "Extract",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          let onclickData = JSON.stringify(thisRow, null, 4);
          console.log(thisRow);

          // alert(onclickData)

          history("/dataform", { state: { thisRow } });
        };

        return <Button onClick={onClick}>Proceed</Button>;
      },
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3000/grid_data")
      .then((data) => data.json())
      .then((data) => {
        setRowsToShow(data);
        setAllRows(data);
      });
  }, []);

  const toggleChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value.trim().length) {
      const searchResults = allRows.filter((row) => {
        return row.id.toString() === e.target.value.trim();
      });
      setRowsToShow(searchResults);
    } else {
      setRowsToShow(allRows);
    }
    console.log(tableData);
  };

  const deleteAPIData = () => {
    // console.log(dest)
    // axios.delete(
    //   `https://620497f4c6d8b20017dc35a0.mockapi.io/TestData/1`,
    //   {}
    // );
  };

  return (
    <div style={{ height: 600, width: "100%" }}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="standard"
        style={{ marginBottom:15, marginTop:5 }}
        onChange={toggleChange}
        value={search}
      />
      <DataGrid
        getRowId={(row) => row.id}
        rows={rowsToShow}
        columns={columns}
        pageSize={15}
        checkboxSelection
        onSelectionModelChange={({ selectionModel }) => {
          const rowIds = selectionModel.map((rowId) =>
            parseInt(String(rowId), 10)
          );
          const rowsToDelete = rowsToShow.filter((row) =>
            rowIds.includes(row.id)
          );
          console.log("Row for deletion is : ");
          console.log(rowsToDelete);
          setDeletedRows(rowsToDelete);
        }}
      />
      <Button style={{ margin: 10 }} onClick={deleteAPIData}>
        Add
      </Button>
    </div>
  );
};

export default DataTable;
