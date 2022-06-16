import { Button } from "@material-ui/core";
import React from "react";
import "../services/UserData";

const TopDiv = (props) => {
  let name = "Mohammad Arsalan Khan";

  return (
    <div className="topbar"  style={{ marginBottom:20}}>
      {name}
        <Button style={{ marginLeft:20}}>Logout</Button>
      
    </div>
  );
};

export default TopDiv;
