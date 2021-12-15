// @ts-nocheck
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
import project3 from '../assets/images/react.jpg';
import project4 from '../assets/images/mern-stack.jpg';

const useStyles = makeStyles({
  mainContainer: {
    background: '#3C3B3A',
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
      <Box component='div' className={classes.mainContainer}>
        <Navbar />
        <Grid container justify='center' alignItems='center'>
          {/*Project 1*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 1'
                  height='140'
                  image={project1}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    style={{ textAlign: 'center' }}
                  >
                    Oscars Game Project
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    style={{ textAlign: 'center' }}
                  >
                    Juego diseñado para votar y que cada participante elija a
                    sus candidatos a ganar la estatuilla en cada categoría
                    disponible en los premios Oscars del año 2020. Responsive y
                    reutilisable para otros años. HTML, CSS y JS.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Button size='small' color='primary'>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/jorgediazok/oscars-2020'
                  >
                    Github
                  </a>
                </Button>
                <Button size='small' color='primary'>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://oscars-game-site.netlify.app/'
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
                  component='img'
                  alt='Project 2'
                  height='140'
                  image={project2}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    style={{ textAlign: 'center' }}
                  >
                    Gaming Shop Project
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    style={{ textAlign: 'center' }}
                  >
                    Sitio web de venta de Consolas y Videojuegos. Shopping Cart
                    con utilización de API REST, NodeJS, Express, localStorage y
                    Formularios. CSS y Vanilla Javascript, sin frameworks. Base
                    de datos en MongoDB.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Button size='small' color='primary'>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/jorgediazok/shopping-cart'
                  >
                    Github
                  </a>
                </Button>
                <Button size='small' color='primary'>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://gaming-shoppingcart.herokuapp.com/index.html'
                  >
                    Deploy
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/*Project 3*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 3'
                  height='140'
                  image={project3}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    style={{ textAlign: 'center' }}
                  >
                    Search Your Series
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    style={{ textAlign: 'center' }}
                  >
                    Proyecto que trae desde la API de TMDB información detallada
                    sobre cualquier película que el usuario busque desde la
                    Search Bar. Realizado con React y React Context. Estilos en
                    Styled Components. Uso de custom Hooks.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Button size='small' color='primary'>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/jorgediazok/react-movies-2021'
                  >
                    Github
                  </a>
                </Button>
                <Button size='small' color='primary'>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://react-movies-21.netlify.app/'
                  >
                    Deploy
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/*Project 4*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Project 4'
                  height='140'
                  image={project4}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    style={{ textAlign: 'center' }}
                  >
                    Post Your Moments App
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    style={{ textAlign: 'center' }}
                  >
                    Proyecto de estilo Red Social en donde cada usuario se
                    registra y puede compartir momentos de su vida. Hecha con
                    React-Redux, Express, Node y Base de datos en Mongo DB.
                    Frontend con MaterialUI y styled components. Responsive.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Button size='small' color='primary'>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/jorgediazok/posts-mern-app/'
                  >
                    Github
                  </a>
                </Button>
                <Button size='small' color='primary'>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://post-your-moments.herokuapp.com/'
                  >
                    Deploy
                  </a>
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
