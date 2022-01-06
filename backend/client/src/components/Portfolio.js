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
                  image={project4}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    style={{ textAlign: 'center' }}
                  >
                    Beerhouse Marketplace
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    style={{ textAlign: 'center' }}
                  >
                    Online store of beer delivery. The project was created with
                    React, Redux and Sass in the front and Node JS, Express and
                    Mongo DB in the back. To purchase a product needs
                    registration. API data managed with Contentful CMS.
                    Interesting 404 page in case of mispelling.
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
                    href='https://github.com/jorgediazok/beerhome-project'
                  >
                    Github
                  </a>
                </Button>
                <Button size='small' color='primary'>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://beerhouse-ba.herokuapp.com/'
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
                  alt='Project 1'
                  height='140'
                  image={project3}
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
                    Cards Game where you can choose who will be the Oscar
                    winners in the 2021 edition. This simple but entertaining
                    app has been made entirely with React JS and pure CSS. The
                    data is fetched from Contentful CMS. Ideal to readapt every
                    year and share it with friends.
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
                    href='https://github.com/jorgediazok/oscars-2021-project'
                  >
                    Github
                  </a>
                </Button>
                <Button size='small' color='primary'>
                  <a
                    style={{ textDecoration: 'none', color: 'black' }}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://react-oscars-game.netlify.app/'
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
                    Videogames marketplace website. Layout made entirel with
                    HTML5 and CSS, without any extra library or framework. It
                    has a register form where user is saved in MongoDB. The
                    project has also connection to an API and includes data
                    persistance with localStorage.
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

          {/*Project 4*/}
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
                    React Movie Project
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    style={{ textAlign: 'center' }}
                  >
                    Using the TMDB movies API, you can use the searchbar to find
                    any movie or series and go deeper to a huge amount of
                    information about them. The front is made with React and
                    Styled Components. Some custom hooks were also used as
                    helpers.
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

          {/*Project 5*/}
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
                    Social Network project where every user should register and
                    can share or like any other user "moment" post. It was built
                    with React, Redux, Material UI in the Frontend and the users
                    and posts are saved in MongoDB. Deployed in Heroku.
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
