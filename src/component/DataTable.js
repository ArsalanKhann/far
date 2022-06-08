import React, { useState, useEffect } from "react";
import "../fra.css";
import { DataGrid } from "@material-ui/data-grid";
import {
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DataTable = () => {
  const history = useNavigate();

  const [search, setSearch] = useState("");
  let [searchField, setSearchField] = useState("BRANCH_CODE");
  const [tableData, setTableData] = useState([]);
  const [allRows, setAllRows] = useState(tableData);
  const [rowsToShow, setRowsToShow] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

  let [searchTextfieldDisabled, setSearchTextfieldDisabled] = useState(true);

  const [values, setValues] = useState([
    { value: "id", label: "Asset No.", id: 0 },
    { value: "SERIAL_NUMBER", label: "Serial Number", id: 1 },
    { value: "DESCRIPTION", label: "Description", id: 2 },
    { value: "MAJOR_CATEGORY", label: "Major Category", id: 3 },
    { value: "MINOR_CATEGORY", label: "Minor Category", id: 4 },
    { value: "PURCHASE_DATE", label: "Purchase Date", id: 5 },
    { value: "PURCHASE_VALUE_RS", label: "Value", id: 6 },
    { value: "WDV", label: "WDV", id: 7 },
    { value: "LOCATION_CODE", label: "Location Code", id: 8 },
    { value: "BRANCH_NAME", label: "Branch Name", id: 9 },
    { value: "BRANCH_CODE", label: "Branch Code", id: 10 },
    { value: "QTY_AS_FAR", label: "Quantity As Far", id: 11 },
  ]);

  let [selectedId, setSelectedId] = useState();

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
        return row[selectedId.value].includes(e.target.value.trim());
      });
      setRowsToShow(searchResults);
    } else {
      setRowsToShow(allRows);
    }
  };

  const handleChange = (e) => {
    setSearchTextfieldDisabled(false);

    console.log("Name " + e.target.value.label);
    console.log("ID " + e.target.value.id);
    setSelectedId(e.target.value);
  };

  const deleteAPIData = () => {
    console.log("Row for deletion is : ");
    console.log(deletedRows);
  };

  return (
    <div className="shadow-base">
      <div className="title">
        <div className="card-title">Add new Data</div>

        <FormControl>
          <InputLabel
            className="xrp"
            id="demo-simple-select-label"
            sx={{
              MuiFormLabel: {
                top: "7px",
              },
            }}
          >
            Search Option
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label="Search Option"
            value={values.label}
            onChange={handleChange}
            style={{ width: 150, marginRight: 5 }}
            size="small"
          >
            {values.map((value, index) => {
              return (
                <MenuItem
                  value={value}
                  id={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 5,
                  }}
                >
                  {value.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          size="small"
          label="Search"
          disabled={searchTextfieldDisabled}
          variant="outlined"
          onChange={toggleChange}
          value={search}
        />
      </div>
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
      <Button
        className="customButton"
        variant="contained"
        color="primary"
        onClick={deleteAPIData}
      >
        Add New Data
      </Button>
    </div>
  );
};

export default DataTable;
