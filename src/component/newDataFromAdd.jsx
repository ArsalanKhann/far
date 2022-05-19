import React, { Component, useState, useMemo, useEffect, useRef } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import {
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListSubheader,
  TextField,
  InputAdornment,
} from "@mui/material";

class NewDataFormAdd extends Component {
  state = {
    disabledMinorCategory: "",
    selectMajorCategoryList: "",
    selectMinorCategoryList: "",
    textfieldState: "",
    searchText: "",
    allRows: "",
  };

  displayedOptions;

  constructor(props) {
    try {
      super(props);
      //   this.props = props;
    } catch (error) {
      //   alert(error.message);
      //   console.log(error);
    }
  }

  initialValues = {
    ASSET_NUMBER: "",
    SERIAL_NUMBER: "",
    DESCRIPTION: "",
    MAJOR_CATEGORY: "",
    MINOR_CATEGORY: "",
    PURCHASE_DATE: "",
    PURCHASE_VALUE_RS: "",
    WDV: "",
    LOCATION_CODE: "",
    BRANCH_NAME: "",
    BRANCH_CODE: "",
    QTY_AS_FAR: "",
    AVAILABILITY_STATUS: "",
    REMARKS_IF_NO: "",
    CUSTODIAN_EMP_ID: "",
    CUSTODIAN_EMP_NO: "",
    OTHER_REMARKS: "",
  };

  withidmajorCategoryList = [
    { id: 1, value: "Building" },
    { id: 2, value: "Communication Equipment" },
    { id: 3, value: "Computer" },
    { id: 4, value: "laptop" },
    { id: 5, value: "hassan" },
  ];

  //  [disabledMinorCategory, setdisabledMinorCategory] = useState(true);
  //  [selectMajorCategoryList, setSelectMajorCategoryList] = useState({});
  //  const [selectMinorCategoryList, setSelectMinorCategoryList] = useState();
  //   const [textfieldState, setTextfieldState] = useState(initialValues);
  //   const [searchText, setSearchText] = useState("");
  //   const [allRows, setAllRows] = useState();

  componentDidMount() {
    fetch("http://localhost:3000/major_category")
      .then((data) => data.json())
      .then((data) => {
        // setAllRows(data);
        this.setState({ allRows: data });
      });

    this.setState({ textfieldState: this.initialValues });
  }

  handleMajorCategoryChange = (e) => {
    console.log("e.target");
    console.log(e.target.value);
    // console.log(selectMajorCategoryList);
    // setSelectMajorCategoryList(e.target.value);
    // setSelectMajorCategoryList(e.target.value);
    this.setState({ selectMajorCategoryList: e.target.value });
    // console.log(allRows);
    this.setState({ disabledMinorCategory: false });
    // setdisabledMinorCategory(false);
  };

  handleChange = (e) => { 
    // console.log("textfieldState");
    console.log(this.state.textfieldState); // Final Data after Change Handleing in Textfield
  };

  handleInputChange = (e) => {
    // Handleing change in textfields which are editable
    const { name, value } = e.target;

    console.log(name);
    console.log(value);
    // this.setState({ textfieldState: { name, value } });
    // this.setState({ textfieldState{}});
    // setTextfieldState({
    //   ...textfieldState,
    //   [name]: value,
    // });

    this.state.textfieldState[name] = value;
  };

  render() {
    this.displayedOptions = this.withidmajorCategoryList;

    return (
      <React.Fragment>
        <Typography sx={{ fontWeight: "bold" }} variant="h6" gutterBottom>
          Data Form
        </Typography>
        {/* Grid is added to view data with each textfield and button at the end in seperate grid elements*/}
        <Grid container spacing={3} marginTop={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="ASSET_NUMBER"
              name="ASSET_NUMBER"
              label="Asset Number"
              fullWidth
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="BRANCH_CODE"
              name="BRANCH_CODE"
              label="Branch Code"
              fullWidth
              autoComplete={"given-name"}
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="BRANCH_NAME"
              name="BRANCH_NAME"
              label="Branch Name"
              fullWidth
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id=""
              name="PURCHASE_DATE"
              label="Purchase Data"
              fullWidth
              autoComplete={"given-name"}
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="PURCHASE_VALUE_RS"
              name="PURCHASE_VALUE_RS"
              label="Purchase Value (RS)"
              fullWidth
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="DESCRIPTION"
              name="DESCRIPTION"
              label="Description"
              fullWidth
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <FormControl fullWidth>
                <InputLabel id="search-select-label">Major Category</InputLabel>
                <Select
                  labelId="search-select-label"
                  id="MAJOR_CATEGORY"
                  label="Options"
                  onChange={(e) => this.handleMajorCategoryChange(e)}
                  onClose={() => this.setState({ searchText: "" })}
                  renderValue={() => this.state.selectMajorCategoryList.value}
                >
                  {this.displayedOptions.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {option.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <FormControl fullWidth disabled={this.disabledMinorCategory}>
                {/* <InputLabel id="search-select-label">Minor Category</InputLabel> */}
                <Select
                  labelId="search-select-label"
                  id="MINOR_CATEGORY"
                  label="Options"
                  onChange={(e) =>
                    this.setSelectMinorCategoryList(e.target.value)
                  }
                  onClose={() => this.setState({ searchText: "" })}
                  renderValue={() => this.selectMinorCategoryList}
                >
                  {this.displayedOptions.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="LOCATION_CODE"
              name="LOCATION_CODE"
              label="Location Code"
              fullWidth
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="QTY_AS_FAR"
              name="QTY_AS_FAR"
              label="Quantity As Far"
              fullWidth
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="WDV"
              name="WDV"
              label="WDV"
              fullWidth
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="AVAILABILITY_STATUS"
              name="AVAILABILITY_STATUS"
              label="Availability Status"
              fullWidth
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="REMARKS_IF_NO"
              name="REMARKS_IF_NO"
              label="Remarks If No"
              fullWidth
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="CUSTODIAN_EMP_ID"
              name="CUSTODIAN_EMP_ID"
              label="Custodian Employee ID"
              fullWidth
              autoComplete={"given-name"}
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="CUSTODIAN_EMP_NO"
              name="CUSTODIAN_EMP_NO"
              label="Custodian Employee No."
              fullWidth
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="OTHER_REMARKS"
              name="OTHER_REMARKS"
              label="Other Remarks"
              fullWidth
              autoComplete={"given-name"}
              variant="standard"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={(e) => this.handleChange(e)}>Submit</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default NewDataFormAdd;
