import React, { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useLocation } from "react-router-dom";
import { Button, Radio, RadioGroup } from "@mui/material";

export default function DataForm() {
  const element = document.querySelector(
    "#put-request-error-handling .date-updated"
  );

  const location = useLocation();             //To recive data from DataTable's Grid Element.

  const initialValues = {
    ASSET_NUMBER: location.state.thisRow.id,
    SERIAL_NUMBER: location.state.thisRow.SERIAL_NUMBER,
    DESCRIPTION: location.state.thisRow.DESCRIPTION,
    MAJOR_CATEGORY: location.state.thisRow.MAJOR_CATEGORY,
    MINOR_CATEGORY: location.state.thisRow.MINOR_CATEGORY,
    PURCHASE_DATE: location.state.thisRow.PURCHASE_DATE,
    PURCHASE_VALUE_RS: location.state.thisRow.PURCHASE_VALUE_RS,
    WDV: location.state.thisRow.WDV,
    LOCATION_CODE: location.state.thisRow.LOCATION_CODE,
    BRANCH_NAME: location.state.thisRow.BRANCH_NAME,
    BRANCH_CODE: location.state.thisRow.BRANCH_CODE,
    QTY_AS_FAR: location.state.thisRow.QTY_AS_FAR,
    AVAILABILITY_STATUS: "",
    REMARKS_IF_NO: "",
    CUSTODIAN_EMP_ID: "",
    CUSTODIAN_EMP_NO: "",
    OTHER_REMARKS: "",
    YES_NO:null
  };

  const [textfieldState, setTextfieldState] = useState(initialValues);

  const handleChange = (e) => {

    console.log(textfieldState);  // Final Data after Change Handleing in Textfield

    axios
      .post("http://localhost:3000", textfieldState)
      .then((response) => this.setState({ articleId: response.data.id }))
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  };


  const handleInputChange = (e) => {    // Handleing change in textfields which are editable
    const { name, value } = e.target;
    setTextfieldState({
      ...textfieldState,
      [name]: value,
    });
  };

  const handleChangeCheck = (e) => {
    const { name, value } = e.target;
    setTextfieldState({
      ...textfieldState,
      [name]: value,
    });
  };

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
            value={initialValues.ASSET_NUMBER}
            id="ASSET_NUMBER"
            name="ASSET_NUMBER"
            label="Asset Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={initialValues.BRANCH_CODE}
            required
            id="BRANCH_CODE"
            name="BRANCH_CODE"
            label="Branch Code"
            fullWidth
            autoComplete={"given-name"}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={initialValues.BRANCH_NAME}
            id="BRANCH_NAME"
            name="BRANCH_NAME"
            label="Branch Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={initialValues.PURCHASE_DATE}
            required
            id=""
            name="PURCHASE_DATE"
            label="Purchase Data"
            fullWidth
            autoComplete={"given-name"}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={initialValues.PURCHASE_VALUE_RS}
            id="PURCHASE_VALUE_RS"
            name="PURCHASE_VALUE_RS"
            label="Purchase Value (RS)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={initialValues.DESCRIPTION}
            id="DESCRIPTION"
            name="DESCRIPTION"
            label="Description"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={initialValues.MAJOR_CATEGORY}
            id="MAJOR_CATEGORY"
            name="MAJOR_CATEGORY"
            label="Major Category"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={initialValues.MINOR_CATEGORY}
            required
            id="MINOR_CATEGORY"
            name="MINOR_CATEGORY"
            label="Minor Category"
            fullWidth
            autoComplete={"given-name"}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={initialValues.LOCATION_CODE}
            id="LOCATION_CODE"
            name="LOCATION_CODE"
            label="Location Code"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={initialValues.QTY_AS_FAR}
            id="QTY_AS_FAR"
            name="QTY_AS_FAR"
            label="Quantity As Far"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={initialValues.WDV}
            id="WDV"
            name="WDV"
            label="WDV"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="AVAILABILITY_STATUS"
            name="AVAILABILITY_STATUS"
            label="Availability Status "
            fullWidth
            variant="standard"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        Yes
        <input
          id="yes"
          value="yes"
          name="yes"
          type="radio"
          onChange={handleChangeCheck}
        />
        <br />
        No
        <input
          id="no"
          value="no"
          name="no"
          type="radio"
          onChange={handleChangeCheck}
        />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleChange}>Submit</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
