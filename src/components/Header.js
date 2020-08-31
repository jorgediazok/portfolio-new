import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../assets/images/avatar.png';

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Avatar"></Avatar>
      <Typography variant="h4"></Typography>
    </Box>
  );
};

export default Header;
