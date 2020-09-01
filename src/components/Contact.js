import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

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
  return (
    <React.Fragment>
      <Navbar />
      <Box component="div">
        <Grid container justify="center">
          <Box component="form">
            <Typography variant="h5">Contact me !</Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              margin="dense"
              size="medium"
            ></InputField>
            <br />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              margin="dense"
              size="medium"
            ></InputField>
            <br />
            <InputField
              fullWidth={true}
              label="Country"
              variant="outlined"
              margin="dense"
              size="medium"
            ></InputField>
          </Box>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
