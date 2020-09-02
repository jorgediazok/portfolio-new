import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  TextField,
  TextareaAutosize,
  Typography,
  Button,
  Grid,
  Box,
} from '@material-ui/core';
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
  textarea: {
    marginTop: '10px',
    background: 'transparent',
    width: '223px',
    borderColor: 'tan',
    color: 'white',
    fontSize: '18px',
    borderRadius: '5px',
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

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Box component="div" style={{ background: '#233', height: '100vh' }}>
        <Grid container justify="center">
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Typography className={classes.heading} variant="h5">
              Contact me !
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              name="name"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              size="medium"
              inputRef={register}
            ></InputField>
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              name="email"
              size="medium"
              inputRef={register}
            ></InputField>
            <InputField
              fullWidth={true}
              label="Country"
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              name="country"
              size="medium"
              inputRef={register}
            ></InputField>
            <TextareaAutosize
              rowsMin={3}
              rowsMax={6}
              name="textarea"
              placeholder="Leave your message"
              className={classes.textarea}
              ref={register}
            />
            <Button
              type="submit"
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              Contact
            </Button>
          </form>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
