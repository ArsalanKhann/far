import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from "@mui/material";

class NewDataFormAdd extends Component {
  state = {
    disabledMinorCategory: true,
    selectMajorCategoryList: "",
    selectMinorCategoryList: "",
    formDataState: {},
    searchText: "",
    allRows: "",
    allMajorCategories: [],
    allMinorCategories: [],
  };

  displayedOptionsMajor;
  displayedOptionsMinor;

  constructor(props) {
    try {
      super(props);
      this.props = props;
    } catch (error) {
      // alert(error.message);
      console.log(error);
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

  componentDidMount() {
    fetch("http://localhost:3000/major_category")
      .then((data) => data.json())
      .then((data) => {
        this.setState({ allMajorCategories: data });
      });

    this.setState({ formDataState: this.initialValues });

    console.log("data is >>");
    console.log(this.state.allMajorCategories);
  }

  handleMajorCategoryChange = (e) => {
    console.log("Data From Major Category Select");
    console.log(e.target.value);
    console.log(e.target.value.id);
    this.setState({ selectMajorCategoryList: e.target.value });

    this.setState({
      formDataState: {
        ...this.state.formDataState,
        MAJOR_CATEGORY: e.target.value.majorcategory,
      },
    });

    if (e.target.value.id != null) {
      this.setState({ disabledMinorCategory: false });

      fetch("http://localhost:3000/minor_category/" + e.target.value.id)
        .then((data) => data.json())
        .then((data) => {
          this.setState({ allMinorCategories: data.minorcategory });
        });
    } else {
      this.setState({ disabledMinorCategory: true });
    }
  };

  handleMinorCategoryChange = (e) => {

    console.log("Minor Category Data");
    console.log(this.displayedOptionsMinor);

    this.setState({
      formDataState: {
        ...this.state.formDataState,
        MINOR_CATEGORY: e.target.value.description,
      },
    });
  };

  handleChange = (e) => {
    console.log(this.state.allMajorCategories);
    console.log(this.withidmajorCategoryList);
    console.log(this.state.formDataState); // Final Data after Change Handleing in Textfield
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(name);
    console.log(value);

    this.setState({
      formDataState: {
        ...this.state.formDataState,
        [name]: value,
      },
    });
  };



  render() {
    this.displayedOptionsMajor = this.state.allMajorCategories;
    this.displayedOptionsMinor = this.state.allMinorCategories;


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
                  label="Options"
                  onChange={this.handleMajorCategoryChange}
                  value={this.state.selectMajorCategoryList.id}
                >
                  {this.displayedOptionsMajor.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {option.majorcategory}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <FormControl fullWidth>
                 <InputLabel id="search-select-label">Minor Category</InputLabel> 
                <Select
                  disabled={this.state.disabledMinorCategory}
                  label="Options"
                  onChange={this.handleMinorCategoryChange}
                  value={this.state.selectMinorCategoryList.id}
                >
                  {this.displayedOptionsMinor.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      <span> {option.description} </span>
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
