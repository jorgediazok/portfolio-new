import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tomato',
  },
  heading: {
    color: 'tomato',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'tan',
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <Box component="div">
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography className={classes.heading} variant="h5">
              Contact me !
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              size="medium"
            ></InputField>
            <br />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              size="medium"
            ></InputField>
            <br />
            <InputField
              fullWidth={true}
              label="Country"
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              size="medium"
            ></InputField>
            <br />
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              Contact
            </Button>
          </Box>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
