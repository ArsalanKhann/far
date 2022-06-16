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

    // Datatable Fields Error True/False

    assetNoError: false,
    branchNameError: false,
    purchaseValueError: false,
    purchaseDateError: false,
    descriptionError: false,
    majorCategoryError: false,
    minorCategoryError: false,
    locationCodeError: false,
    custodianEmployeeIDError: false,
    custodianEmployeeNoError: false,
    otherRemarksError: false,
    branchCodeError: false,
    qtyAsFarError: false,
    wdvError: false,
    availabiltyStatusError: false,
    remarksIfNoError: false,
  };

  phoneRegex = "";
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

  onSubmitButton = (e) => {
    console.log("Button Pressed");

    if (this.state.formDataState.ASSET_NUMBER == "") {
      this.setState({ assetNoError: true });
    } else {
      this.setState({ assetNoError: false });
    }

    if (this.state.formDataState.BRANCH_NAME == "") {
      this.setState({ branchNameError: true });
    } else {
      this.setState({ branchNameError: false });
    }

    if (this.state.formDataState.PURCHASE_VALUE_RS == "") {
      this.setState({ purchaseValueError: true });
    } else {
      this.setState({ purchaseValueError: false });
    }

    if (this.state.formDataState.DESCRIPTION == "") {
      this.setState({ descriptionError: true });
    } else {
      this.setState({ descriptionError: false });
    }

    if (this.state.formDataState.MAJOR_CATEGORY == "") {
      this.setState({ majorCategoryError: true });
    } else {
      this.setState({ majorCategoryError: false });
    }

    if (this.state.formDataState.MINOR_CATEGORY == "") {
      this.setState({ minorCategoryError: true });
    } else {
      this.setState({ minorCategoryError: false });
    }

    if (this.state.formDataState.LOCATION_CODE == "") {
      this.setState({ locationCodeError: true });
    } else {
      this.setState({ locationCodeError: false });
    }

    if (this.state.formDataState.CUSTODIAN_EMP_ID == "") {
      this.setState({ custodianEmployeeIDError: true });
    } else {
      this.setState({ custodianEmployeeIDError: false });
    }

    if (this.state.formDataState.CUSTODIAN_EMP_NO == "") {
      this.setState({ custodianEmployeeNoError: true });
    } else {
      this.setState({ custodianEmployeeNoError: false });
    }

    if (this.state.formDataState.OTHER_REMARKS == "") {
      this.setState({ otherRemarksError: true });
    } else {
      this.setState({ otherRemarksError: false });
    }
    if (this.state.formDataState.REMARKS_IF_NO == "") {
      this.setState({ remarksIfNoError: true });
    } else {
      this.setState({ remarksIfNoError: false });
    }
    if (this.state.formDataState.BRANCH_CODE == "") {
      this.setState({ branchCodeError: true });
    } else {
      this.setState({ branchCodeError: false });
    }
    if (this.state.formDataState.PURCHASE_DATE == "") {
      this.setState({ purchaseDateError: true });
    } else {
      this.setState({ purchaseDateError: false });
    }
    if (this.state.formDataState.AVAILABILITY_STATUS == "") {
      this.setState({ availabiltyStatusError: true });
    } else {
      this.setState({ availabiltyStatusError: false });
    }
    if (this.state.formDataState.WDV == "") {
      this.setState({ wdvError: true });
    } else {
      this.setState({ wdvError: false });
    }
    if (this.state.formDataState.QTY_AS_FAR == "") {
      this.setState({ qtyAsFarError: true });
    } else {
      this.setState({ qtyAsFarError: false });
    }
    if (this.state.formDataState.MINOR_CATEGORY == "") {
      this.setState({ minorCategoryError: true });
    } else {
      this.setState({ minorCategoryError: false });
    }

    // Final Data after Change Handleing in Textfield
  };

  handleBranchName = (e) => {

    if (this.state.formDataState.BRANCH_NAME == "") {
      this.setState({ branchNameError: true });
    } else {
      this.setState({ branchNameError: false });
    }

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

  handleBranchCode = (e) => {

    if (this.state.formDataState.BRANCH_CODE == "") {
      this.setState({ branchCodeError: true });
    } else {
      this.setState({ branchCodeError: false });
    }

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

  handlePurchaseValue = (e) => {


    if (this.state.formDataState.PURCHASE_VALUE_RS == "") {
      this.setState({ purchaseValueError: true });
    } else {
      this.setState({ purchaseValueError: false });
    }

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

  handlePurchaseDate = (e) => {

   if (this.state.formDataState.PURCHASE_DATE == "") {
      this.setState({ purchaseDateError: true });
    } else {
      this.setState({ purchaseDateError: false });
    }

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

  handleDescription = (e) => {

    if (this.state.formDataState.DESCRIPTION == "") {
      this.setState({ descriptionError: true });
    } else {
      this.setState({ descriptionError: false });
    }

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

  handleMajorCategoryError = (e) => {

    if (this.state.formDataState.MAJOR_CATEGORY == "") {
      this.setState({ majorCategoryError: true });
    } else {
      this.setState({ majorCategoryError: false });
    }

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

  handleLocationCode = (e) => {

    if (this.state.formDataState.LOCATION_CODE == "") {
      this.setState({ locationCodeError: true });
    } else {
      this.setState({ locationCodeError: false });
    }

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

  handleQuantityAsFar = (e) => {

    if (this.state.formDataState.QTY_AS_FAR == "") {
      this.setState({ qtyAsFarError: true });
    } else {
      this.setState({ qtyAsFarError: false });
    }

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

  handleWDV = (e) => {

    if (this.state.formDataState.WDV == "") {
      this.setState({ wdvError: true });
    } else {
      this.setState({ wdvError: false });
    }

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

  handleAvailabilityStatus = (e) => {

    if (this.state.formDataState.AVAILABILITY_STATUS == "") {
      this.setState({ availabiltyStatusError: true });
    } else {
      this.setState({ availabiltyStatusError: false });
    }

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

  handleremarksIfNoError = (e) => {

    if (this.state.formDataState.REMARKS_IF_NO == "") {
      this.setState({ remarksIfNoError: true });
    } else {
      this.setState({ remarksIfNoError: false });
    }

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

  handleCustodianEmployeeID = (e) => {

    if (this.state.formDataState.CUSTODIAN_EMP_ID == "") {
        this.setState({ custodianEmployeeIDError: true });
      } else {
        this.setState({ custodianEmployeeIDError: false });
      }

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

  handleCustodianEmployeeNo = (e) => {

    if (this.state.formDataState.CUSTODIAN_EMP_NO == "") {
      this.setState({ custodianEmployeeNoError: true });
    } else {
      this.setState({ custodianEmployeeNoError: false });
    }

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

  handleOtherRemarks = (e) => {

    if (this.state.formDataState.OTHER_REMARKS == "") {
      this.setState({ otherRemarksError: true });
    } else {
      this.setState({ otherRemarksError: false });
    }

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

  handleAssetNumber = (e) => {

    console.log("Length is : "+this.state.formDataState.ASSET_NUMBER.trim().length)

    const { name, value } = e.target;
    
    this.setState({
      formDataState: {
        ...this.state.formDataState,
        [name]: value,
      },
    });

    if (this.state.formDataState.ASSET_NUMBER.trim().length === null) {
      this.setState({ assetNoError: true });
    } else {
      this.setState({ assetNoError: false });
    }

  };

  handleInputChange = (e) => {
   
    alert(e.target.id);

    {
    // if (this.state.formDataState.ASSET_NUMBER == "") {
    //   this.setState({ assetNoError: true });
    // } else {
    //   this.setState({ assetNoError: false });
    // }

    // if (this.state.formDataState.BRANCH_NAME == "") {
    //   this.setState({ branchNameError: true });
    // } else {
    //   this.setState({ branchNameError: false });
    // }

    // if (this.state.formDataState.PURCHASE_VALUE_RS == "") {
    //   this.setState({ purchaseValueError: true });
    // } else {
    //   this.setState({ purchaseValueError: false });
    // }

    // if (this.state.formDataState.DESCRIPTION == "") {
    //   this.setState({ descriptionError: true });
    // } else {
    //   this.setState({ descriptionError: false });
    // }

    // if (this.state.formDataState.MAJOR_CATEGORY == "") {
    //   this.setState({ majorCategoryError: true });
    // } else {
    //   this.setState({ majorCategoryError: false });
    // }

    // if (this.state.formDataState.MINOR_CATEGORY == "") {
    //   this.setState({ minorCategoryError: true });
    // } else {
    //   this.setState({ minorCategoryError: false });
    // }

    // if (this.state.formDataState.LOCATION_CODE == "") {
    //   this.setState({ locationCodeError: true });
    // } else {
    //   this.setState({ locationCodeError: false });
    // }

    // if (this.state.formDataState.CUSTODIAN_EMP_ID == "") {
    //   this.setState({ custodianEmployeeIDError: true });
    // } else {
    //   this.setState({ custodianEmployeeIDError: false });
    // }

    // if (this.state.formDataState.CUSTODIAN_EMP_NO == "") {
    //   this.setState({ custodianEmployeeNoError: true });
    // } else {
    //   this.setState({ custodianEmployeeNoError: false });
    // }

    // if (this.state.formDataState.OTHER_REMARKS == "") {
    //   this.setState({ otherRemarksError: true });
    // } else {
    //   this.setState({ otherRemarksError: false });
    // }
    // if (this.state.formDataState.REMARKS_IF_NO == "") {
    //   this.setState({ remarksIfNoError: true });
    // } else {
    //   this.setState({ remarksIfNoError: false });
    // }
    // if (this.state.formDataState.BRANCH_CODE == "") {
    //   this.setState({ branchCodeError: true });
    // } else {
    //   this.setState({ branchCodeError: false });
    // }
    // if (this.state.formDataState.PURCHASE_DATE == "") {
    //   this.setState({ purchaseDateError: true });
    // } else {
    //   this.setState({ purchaseDateError: false });
    // }
    // if (this.state.formDataState.AVAILABILITY_STATUS == "") {
    //   this.setState({ availabiltyStatusError: true });
    // } else {
    //   this.setState({ availabiltyStatusError: false });
    // }
    // if (this.state.formDataState.WDV == "") {
    //   this.setState({ wdvError: true });
    // } else {
    //   this.setState({ wdvError: false });
    // }
    // if (this.state.formDataState.QTY_AS_FAR == "") {
    //   this.setState({ qtyAsFarError: true });
    // } else {
    //   this.setState({ qtyAsFarError: false });
    // }
    // if (this.state.formDataState.MINOR_CATEGORY == "") {
    //   this.setState({ minorCategoryError: true });
    // } else {
    //   this.setState({ minorCategoryError: false });
    // }

    }

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
      <div className="shadow-base">
        <div className="card-title">Add new Data</div>
        <React.Fragment>
          <Grid container spacing={3} marginTop={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="ASSET_NUMBER"
                name="ASSET_NUMBER"
                label="Asset Number"
                fullWidth
                variant="outlined"
                error={this.state.assetNoError}
                onChange={(e) => this.handleAssetNumber(e)}
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
                variant="outlined"
                error={this.state.branchCodeError}
                onChange={(e) => this.handleBranchCode(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="BRANCH_NAME"
                name="BRANCH_NAME"
                label="Branch Name"
                fullWidth
                variant="outlined"
                error={this.state.branchNameError}
                onChange={(e) => this.handleBranchName(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="PURCHASE_DATE"
                error={this.state.purchaseDateError}
                name="PURCHASE_DATE"
                label="Purchase Date"
                fullWidth
                autoComplete={"given-name"}
                variant="outlined"
                onChange={(e) => this.handlePurchaseDate(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="PURCHASE_VALUE_RS"
                name="PURCHASE_VALUE_RS"
                label="Purchase Value (RS)"
                fullWidth
                variant="outlined"
                error={this.state.purchaseValueError}
                onChange={(e) => this.handlePurchaseValue(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="DESCRIPTION"
                name="DESCRIPTION"
                label="Description"
                fullWidth
                variant="outlined"
                onChange={(e) => this.handleDescription(e)}
                error={this.state.descriptionError}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="search-select-label">
                    Major Category
                  </InputLabel>
                  <Select
                    labelId="search-select-label"
                    label="Major Category"
                    onChange={this.handleMajorCategoryChange}
                    value={this.state.selectMajorCategoryList.id}
                    error={this.state.majorCategoryError}
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
                  <InputLabel id="search-select-label">
                    Minor Category
                  </InputLabel>
                  <Select
                    disabled={this.state.disabledMinorCategory}
                    labelId="search-select-label"
                    label="Maior Category"
                    onChange={this.handleMinorCategoryChange}
                    value={this.state.selectMinorCategoryList.id}
                    error={this.state.minorCategoryError}
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
                variant="outlined"
                error={this.state.locationCodeError}
                onChange={(e) => this.handleLocationCode(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="QTY_AS_FAR"
                name="QTY_AS_FAR"
                label="Quantity As Far"
                fullWidth
                variant="outlined"
                error={this.state.qtyAsFarError}
                onChange={(e) => this.handleQuantityAsFar(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="WDV"
                name="WDV"
                label="WDV"
                error={this.state.wdvError}
                fullWidth
                vvariant="outlined"
                onChange={(e) => this.handleWDV(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="AVAILABILITY_STATUS"
                name="AVAILABILITY_STATUS"
                label="Availability Status"
                fullWidth
                variant="outlined"
                error={this.state.availabiltyStatusError}
                onChange={(e) => this.handleAvailabilityStatus(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="REMARKS_IF_NO"
                name="REMARKS_IF_NO"
                label="Remarks If No"
                fullWidth
                variant="outlined"
                error={this.state.remarksIfNoError}
                onChange={(e) => this.handleremarksIfNoError(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="CUSTODIAN_EMP_ID"
                error={this.state.custodianEmployeeIDError}
                name="CUSTODIAN_EMP_ID"
                label="Custodian Employee ID"
                fullWidth
                autoComplete={"given-name"}
                variant="outlined"
                onChange={(e) => this.handleCustodianEmployeeID(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                error={this.state.custodianEmployeeNoError}
                id="CUSTODIAN_EMP_NO"
                name="CUSTODIAN_EMP_NO"
                label="Custodian Employee No."
                fullWidth
                variant="outlined"
                onChange={(e) => this.handleCustodianEmployeeNo(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="OTHER_REMARKS"
                name="OTHER_REMARKS"
                label="Other Remarks"
                fullWidth
                error={this.state.otherRemarksError}
                autoComplete={"given-name"}
                variant="outlined"
                onChange={(e) => this.handleOtherRemarks(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="customButton"
                variant="contained"
                color="primary"
                onClick={(e) => this.onSubmitButton(e)}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}

export default NewDataFormAdd;
