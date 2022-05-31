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
    <MUIDrawer variant="persistent" className={classes.drawer} open={true} style={{margin:20}}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick} style={{paddingTop:15 , paddingRight:15}}>
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
