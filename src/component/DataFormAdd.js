import React, { useState, useMemo , useEffect} from "react";
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

const containsText = (text, searchText) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

let majorCategoryList = [
  // "Building",
  // "Communication Equipment",
  // "Computer",
  // "Computer Software",
  // "Fixture & Fixture New",
  // "Land",
  // "Office Machines and Equipment",
  // "Vehicle"
];

export default function DataFormAdd() {
  const initialValues = {
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



  //==============Enabling Major Category and Setting Minor Category Data=====================

  const [disabledMinorCategory, setdisabledMinorCategory] = useState(true);

  const MajorCategoryChange = (e) => {
  
    setSelectMajorCategoryList(e.target.value);
  
    console.log(selectMajorCategoryList);
  //  console.log(allRows);
    setdisabledMinorCategory(false);

  };


  //===============================================================
  
  const [allMajorCategories, setAllMajorCategories] = useState([]);

  const callConfirmService = async (confirmData) => {
    return new Promise(async (resolve, reject) => {
      let patchUrl =
        'http://localhost:3000/major_category';
      let serviceRespnse = await axios.request({
        method: 'GET',
        url: patchUrl,
        headers: '',
        data: confirmData,
      });
      resolve(serviceRespnse);  
    });
  }

  useEffect(async () => {
    let serviceData = await callConfirmService();
    console.log(serviceData.data)
    setAllMajorCategories(serviceData.data.map(user => user.majorcategory))
    console.log(allMajorCategories)
    allMajorCategories = serviceData.data.map(user => user.majorcategory)
    majorCategoryList = serviceData.data.map(user => user.majorcategory)
  }, []);

  //===============================================================

  //Dropdown Search Major and Minor Categories

  const [selectMajorCategoryList, setSelectMajorCategoryList] = useState();
  const [selectMinorCategoryList, setSelectMinorCategoryList] = useState();

  const [searchText, setSearchText] = useState("");
  const displayedOptions = useMemo(
    () =>
      majorCategoryList.filter((option) => containsText(option, searchText)),
    [searchText]
  );

  //======================================================================

  const [textfieldState, setTextfieldState] = useState(initialValues);

  const handleChange = (e) => {
    console.log(textfieldState); // Final Data after Change Handleing in Textfield
  };

  const handleInputChange = (e) => {
    // Handleing change in textfields which are editable
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
            id="ASSET_NUMBER"
            name="ASSET_NUMBER"
            label="Asset Number"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="DESCRIPTION"
            name="DESCRIPTION"
            label="Description"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="search-select-label">Major Category</InputLabel>
              <Select
                MenuProps={{ autoFocus: false }}
                labelId="search-select-label"
                id="MAJOR_CATEGORY"
                label="Options"
                onChange={MajorCategoryChange}
                onClose={() => setSearchText("")}
                renderValue={() => selectMajorCategoryList}
              >
                <ListSubheader>
                  <TextField
                    size="small"
                    autoFocus
                    placeholder="Type to search..."
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key !== "Escape") {
                        e.stopPropagation();
                      }
                    }}
                  />
                </ListSubheader>
                {displayedOptions.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <FormControl fullWidth disabled={disabledMinorCategory}>
              <InputLabel id="search-select-label">Minor Category</InputLabel>
              <Select
                MenuProps={{ autoFocus: false }}
                labelId="search-select-label"
                id="MINOR_CATEGORY"
                label="Options"
                onChange={(e) => setSelectMinorCategoryList(e.target.value)}
                onClose={() => setSearchText("")}
                renderValue={() => selectMinorCategoryList}
              >
                <ListSubheader>
                  <TextField
                    size="small"
                    autoFocus
                    placeholder="Type to search..."
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key !== "Escape") {
                        e.stopPropagation();
                      }
                    }}
                  />
                </ListSubheader>
                {displayedOptions.map((option, i) => (
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="AVAILABILITY_STATUS"
            name="AVAILABILITY_STATUS"
            label="Availability Status"
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
        <Grid item xs={12}>
          <Button onClick={handleChange}>Submit</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
