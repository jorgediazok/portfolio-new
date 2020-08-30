import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
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

const menuIcons = [
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
    height: '30rem',
  },
  avatar: {
    display: 'block',
    margin: '0.5 rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box component="div" className={classes.menuSliderContainer}>
        <Avatar src={avatar} alt="Avatar" className={classes.avatar} />
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon></ListItemIcon>
          </ListItem>
        </List>
      </Box>

      <Box component="nav">
        <AppBar position="static" style={{ background: '#222' }}>
          <Toolbar>
            <IconButton>
              <ArrowBack style={{ color: 'tomato' }} />
            </IconButton>
            <Typography variant="h5" style={{ color: 'tan' }}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
