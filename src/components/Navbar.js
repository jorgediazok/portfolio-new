import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from '@material-ui/core';
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';

import avatar from '../assets/images/avatar.png';

//Icons

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
  },
];

//CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5 rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
  },
}));

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({
      ...state,
      [slider]: open,
    });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      component="div"
      className={classes.menuSliderContainer}
      onClick={toggleSlider(slider, false)}
    >
      <Avatar src={avatar} alt="Avatar" className={classes.avatar} />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('right', true)}>
              <ArrowBack style={{ color: 'tomato' }} />
            </IconButton>
            <Typography variant="h5" style={{ color: 'tan' }}>
              Portfolio
            </Typography>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider('right', false)}
            >
              {sideList('right')}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
