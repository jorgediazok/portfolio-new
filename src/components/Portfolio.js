import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../assets/images/html-css-javascript-lg.jpg';

const Portfolio = () => {
  return (
    <React.Fragment>
      <Box component="div">
        <Navbar />
        <Grid container justify="center" alignItems="center">
          {/*Project 1*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    dolorem labore numquam reprehenderit optio deserunt
                    perspiciatis necessitatibus deleniti fuga. Consequatur!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Github
                  </Button>
                  <Button size="small" color="primary">
                    Deploy
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Portfolio;
