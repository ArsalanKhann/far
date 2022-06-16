import React, { Component } from "react";
import {
  Button,
  TextField,
  Grid,
} from "@mui/material";
import "../services/UserData"
import { axios, axiosError } from "axios";


export class LoginPage extends Component {
  
  state = {
    password: "",
    username:"",
  };

  fieldHandleChange = (e) => {

    console.log(""+e.target.id)

    if(e.target.id == "password"){
      this.setState({password:e.target.value})
    }
    else if(e.target.id == "username"){
      this.setState({username:e.target.value})    
    }
  };

  handleChange = (e) =>{
    console.log("Password = " + this.state.password)
    console.log("Username = " + this.state.username)

    let user= this.state.user;
    let pwd= this.state.password;

  //   try {
  //     const response =  axios.post("testurl", JSON.stringify({ user, pwd }),
  //         {
  //             headers: { 'Content-Type': 'application/json' },
  //             withCredentials: true
  //         }
  //     );
  //     console.log(JSON.stringify(response?.data));
      

  // } catch (err) {
  //     if (!err?.response) {
  //         console.log('No Server Response');
  //     } else if (err.response?.status === 400) {
  //       console.log('Missing Username or Password');
  //     } else if (err.response?.status === 401) {
  //       console.log('Unauthorized');
  //     } else {
  //       console.log('Login Failed');
  //     }
  // }
};


  render() {
    return (
      <div className="shadow-base">
      <Grid container spacing={3} marginTop={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            fullWidth
            variant="outlined"
            type="text"
            onChange={this.fieldHandleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            type="password"
            variant="outlined"
            onChange={this.fieldHandleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            className="customButton"
            variant="contained"
            color="primary"
            onClick={this.handleChange}
          >
            Add New Data
          </Button>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default LoginPage