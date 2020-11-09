import React from 'react';
import { makeStyles } from '@material-ui/styles';
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
      <BottomNavigation
        showLabels={false}
        style={{ background: '#222', width: 'auto' }}
      >
        <BottomNavigationAction
          href="//facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.root}
          style={{ padding: '0' }}
          showLabel={false}
          icon={<Facebook />}
        ></BottomNavigationAction>

        <BottomNavigationAction
          href="//github.com/jorgediazok"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.root}
          style={{ padding: '0' }}
          showLabel={false}
          icon={<GitHub />}
        ></BottomNavigationAction>

        <BottomNavigationAction
          href="//www.linkedin.com/in/jorgediaz1984/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.root}
          style={{ padding: '0' }}
          showLabel={false}
          icon={<Linkedin />}
        ></BottomNavigationAction>
      </BottomNavigation>
    </React.Fragment>
  );
};

export default Footer;
