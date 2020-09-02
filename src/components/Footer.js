// @ts-nocheck
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import Linkedin from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  '& .MuiBottomNavigationAction-root': {
    minWidth: 0,
    maxWidth: 250,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <BottomNavigation width="auto" style={{ background: '#222' }}>
        <BottomNavigationAction
          className="classes.root"
          style={{ padding: '0' }}
          icon={<Facebook />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          className="classes.root"
          style={{ padding: '0' }}
          icon={<Twitter />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          className="classes.root"
          style={{ padding: '0' }}
          icon={<GitHub />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          className="classes.root"
          style={{ padding: '0' }}
          icon={<Linkedin />}
        ></BottomNavigationAction>
      </BottomNavigation>
    </React.Fragment>
  );
};

export default Footer;
