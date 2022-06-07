import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useNavigate } from "react-router-dom";
import jslogo from '../images/js_logo.png'

const useStyles = makeStyles({
  drawer: {
    width: "190px",
  },
});


const Drawer = (props) => {
  const history = useNavigate();

  const classes = useStyles();
  const itemsList = [
    {
      text: "Add New Data",
      icon: <MailIcon />,
      onClick: () => history("/dataformadd"),
    },
    {
      text: "Datatable",
      icon: <InboxIcon />,
      onClick: () => history("/datatable"),
    },
    {
      text: "Data Table Rejected",
      icon: <MailIcon />,
      onClick: () => history("/datatablerejected"),
    },
  ];
  return (
    <MUIDrawer variant="persistent" className={classes.drawer} open={true} >
      <div className="logo">
        <img src={jslogo} />
      </div>
      <div class="nav-label">NAVIGATION</div>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem disabled={false} button key={text} onClick={onClick} >
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
