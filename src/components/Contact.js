import React, { useState } from 'react';
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
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '300px',
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
    width: '300px',
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [textarea, setTextarea] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'name') {
      setName(e.target.value);
    } else if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'country') {
      setCountry(e.target.value);
    } else {
      setTextarea(e.target.value);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      country,
      textarea,
    };
    axios
      .post('/api/form', data)
      .then((res) => console.log(res))
      .catch(() => {
        console.log('message not send');
      });
  };

  return (
    <React.Fragment>
      <Navbar />
      <Box component="div" style={{ background: '#233', height: '100vh' }}>
        <Grid container justify="center">
          <form onSubmit={formSubmit} className={classes.form}>
            <Typography className={classes.heading} variant="h5">
              Contact me !
            </Typography>

            <InputField
              id="name"
              fullWidth={true}
              label="Name"
              name="name"
              variant="outlined"
              value={name}
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              size="medium"
              onChange={handleChange}
            ></InputField>

            <InputField
              id="email"
              fullWidth={true}
              label="Email"
              name="email"
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              value={email}
              size="medium"
              onChange={handleChange}
            ></InputField>

            <InputField
              id="country"
              fullWidth={true}
              label="Country"
              name="country"
              variant="outlined"
              inputProps={{ style: { color: 'white' } }}
              margin="dense"
              value={country}
              size="medium"
              onChange={handleChange}
            ></InputField>

            <TextareaAutosize
              id="textarea"
              name="textarea"
              rowsMin={3}
              rowsMax={6}
              value={textarea}
              placeholder="Leave your message"
              className={classes.textarea}
              onChange={handleChange}
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
