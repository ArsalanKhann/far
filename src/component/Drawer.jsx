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
      text: "Datatable",
      icon: <InboxIcon />,
      onClick: () => history("/datatable"),
    },
    {
      text: "New Data Form Add",
      icon: <MailIcon />,
      onClick: () => history("/dataformadd"),
    },
    {
      text: "Data Form",
      icon: <MailIcon />,
      onClick: () => history("/dataform"),
    },
  ];
  return (
    <MUIDrawer variant="persistent" className={classes.drawer} open={true}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
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
