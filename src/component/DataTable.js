import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
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
    { field: "id", headerName: "ID", width: 130, disableColumnMenu: true },
    { field: "idEx", headerName: "idEX", width: 300 },
    { field: "firstName", headerName: "First Name", width: 300 },
    { field: "lastName", headerName: "Last Name", width: 400 },
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

        return <Button onClick={onClick}>Click</Button>;
      },
    },
  ];

  useEffect(() => {
    fetch("https://620497f4c6d8b20017dc35a0.mockapi.io/TestData")
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

    const dest= deletedRows.id;

    console.log(dest)

    // axios.delete(
    //   `https://620497f4c6d8b20017dc35a0.mockapi.io/TestData/1`,
    //   {}
    // );
  };

  return (
    <div style={{ height: 500, width: "100%" }}>
      <input
        onChange={toggleChange}
        value={search}
        style={{ margin: 10 }}
      ></input>
      <DataGrid
        rows={rowsToShow}
        columns={columns}
        pageSize={12}
        checkboxSelection
        onSelectionModelChange={({ selectionModel }) => {
          const rowIds = selectionModel.map((rowId) =>
            parseInt(String(rowId), 10)
          );
          const rowsToDelete = rowsToShow.filter((row) => rowIds.includes(row.id));
          console.log("Row for deletion is : ");
          console.log(rowsToDelete)
          setDeletedRows(rowsToDelete);
        }}
      />
      <Button onClick={deleteAPIData}>Delete</Button>
    </div>
  );
};

export default DataTable;

