import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '2px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'tomato',
    color: 'white',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: 'white',
    padding: '0',
    textTransform: 'uppercase',
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
            style={{ borderRadius: '5px' }}
          >
            2010
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              className={classes.subHeading}
              style={{ color: 'tomato' }}
            >
              Media Marketing.
            </Typography>
            <Typography variant="body1" style={{ color: 'tomato' }}>
              IFR Monitoring.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'tan', textAlign: 'justify' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              velit consequatur similique veniam molestias labore cumque
              exercitationem fugiat totam. In!
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
            style={{ borderRadius: '5px' }}
          >
            2013
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              className={classes.subHeading}
              style={{ color: 'tomato' }}
            >
              Data Entry / Data Base Monitoring
            </Typography>
            <Typography variant="body1" style={{ color: 'tomato' }}>
              RecHospi Agroupation.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'tan', textAlign: 'justify' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              velit consequatur similique veniam molestias labore cumque
              exercitationem fugiat totam. In!
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
            style={{ borderRadius: '5px' }}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              className={classes.subHeading}
              style={{ color: 'tomato' }}
            >
              Web Design / Web Development
            </Typography>
            <Typography variant="body1" style={{ color: 'tomato' }}>
              FreeLance.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'tan', textAlign: 'justify' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              velit consequatur similique veniam molestias labore cumque
              exercitationem fugiat totam. In!
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Resume;