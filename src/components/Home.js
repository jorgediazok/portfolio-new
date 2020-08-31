import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  particlesCanva: {
    position: 'absolute',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: { value: 45, density: { enable: true, value_area: 600 } },
          },
        }}
      />
    </div>
  );
};

export default Home;
