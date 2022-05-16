import React, { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useLocation } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";

export default function DataForm() {

  let radioValue;

  const location = useLocation();
  console.log(location.state.thisRow.id);

  const handleChange = (e) => {

    radioValue = e.target.value;
      alert("Value of RadioValue now is: "+radioValue);
  }

  return (
    <React.Fragment>
      <Typography sx={{ fontWeight: 'bold' }} variant="h6" gutterBottom>
          Data Form
      </Typography>
      <Grid container spacing={3} marginTop={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={location.state.thisRow.id}
            id="ASSET_NUMBER"
            name="ASSET_NUMBER"
            label="Asset Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={location.state.thisRow.BRANCH_CODE}
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
            value={location.state.thisRow.BRANCH_NAME}
            id="BRANCH_NAME"
            name="BRANCH_NAME"
            label="Branch Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={location.state.thisRow.PURCHASE_DATE}
            required
            id="PURCHASE_DATE"
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
            value={location.state.thisRow.PURCHASE_VALUE_RS}
            id="PURCHASE_VALUE_RS"
            name="PURCHASE_VALUE_RS"
            label="Purchase Value (RS)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={location.state.thisRow.DESCRIPTION}
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
            value={location.state.thisRow.MAJOR_CATEGORY}
            id="MAJOR_CATEGORY"
            name="MAJOR_CATEGORY"
            label="Major Category"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={location.state.thisRow.MINOR_CATEGORY}
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
            value={location.state.thisRow.LOCATION_CODE}
            id="LOCATION_CODE"
            name="LOCATION_CODE"
            label="Location Code"
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
          />
        </Grid>
        <Grid item xs={12}>
          <label style={{margin:5}}>Yes</label>
        <input
          id="yes"
          value="Yes"
          name="platform"
          type="radio"
          onChange={handleChange}
        />
        <label style={{margin:5}}>No</label>
        <input
          id="no"
          value="No"
          name="platform"
          type="radio"
          onChange={handleChange}
        />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={console.log("Submit")}>Submit</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
