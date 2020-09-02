// @ts-nocheck
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import Linkedin from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: 250,
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <BottomNavigation width="auto" style={{ background: '#222' }}>
        <Link
          to="//facebook.com"
          target={'_blank'}
          rel="noopener noreferrer"
          style={{ marginTop: '15px' }}
        >
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: '0' }}
            icon={<Facebook />}
          ></BottomNavigationAction>
        </Link>
        <Link
          to="//github.com/jorgediazok"
          target={'_blank'}
          rel="noopener noreferrer"
          style={{ marginTop: '15px' }}
        >
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: '0' }}
            icon={<GitHub />}
          ></BottomNavigationAction>
        </Link>
        <Link
          to="//www.linkedin.com/in/jorgediaz1984/"
          target={'_blank'}
          rel="noopener noreferrer"
          style={{ marginTop: '15px' }}
        >
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: '0' }}
            icon={<Linkedin />}
          ></BottomNavigationAction>
        </Link>
      </BottomNavigation>
    </React.Fragment>
  );
};

export default Footer;
