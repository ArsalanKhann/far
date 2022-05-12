  import * as React from 'react';
  import Grid from '@mui/material/Grid';
  import Typography from '@mui/material/Typography';
  import TextField from '@mui/material/TextField';
  import FormControlLabel from '@mui/material/FormControlLabel';
  import Checkbox from '@mui/material/Checkbox';
  import {useLocation} from 'react-router-dom';

  export default function DataForm() {
    const location = useLocation();
    console.log(location.state.thisRow.id);
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Data Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField 
              value={location.state.thisRow.userId}
              required
              id="userID"
              name="User ID"
              label="First name"
              fullWidth
              autoComplete={"given-name"}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={location.state.thisRow.id}
              id="id"
              name="ID"
              label="ID"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              value={location.state.thisRow.body}
              id="body"
              name="Body"
              label="Body"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={location.state.thisRow.title}
              id="title"
              name="Title"
              label="Title"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }