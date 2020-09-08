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
import project2 from '../assets/images/javascript-fullstack.jpg';
import project3 from '../assets/images/react-redux.jpg';
import project4 from '../assets/images/mern-stack.jpg';

const useStyles = makeStyles({
  mainContainer: {
    background: '#233',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center" alignItems="center">
          {/*Project 1*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Oscars Game Project
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Juego diseñado para votar y que cada participante elija a
                    sus candidatos a ganar la estatuilla en cada categoría
                    disponible en los premios Oscars del año 2020. Reutilisable
                    para otros años. Puro Vanilla Javascript.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/jorgediazok/oscars-2020"
                  >
                    Github
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://jorgediazok.github.io/oscars-2020/"
                  >
                    Deploy
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/*Project 2*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 2
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
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Github
                </Button>
                <Button size="small" color="primary">
                  Deploy
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/*Project 3*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 3
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
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Github
                </Button>
                <Button size="small" color="primary">
                  Deploy
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/*Project 4*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 4
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
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Github
                </Button>
                <Button size="small" color="primary">
                  Deploy
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Portfolio;
