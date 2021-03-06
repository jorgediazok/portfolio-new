import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Navbar from './Navbar';
// @ts-ignore
import Image from '../assets/images/profile.jpg';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '3%',
    padding: '2%',
    alignItems: 'center',
    background: '#222',
    color: 'tan',
    border: '2px solid tan',
    borderRadius: '5px',
    textAlign: 'center',
    hyphens: 'auto',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      textAlign: 'justify',
      textJustify: 'inter-word',
      padding: '10px',
      fontSize: '10px',
      hyphens: 'auto',
    },
  },

  headerTypography: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.6em',
      hyphens: 'auto',
      marginTop: '10px',
      fontWeight: '400',
    },
  },

  profileImage: {
    borderRadius: '50%',
    maxHeight: '180px',
    margin: '1%',
    border: '2px solid #222',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '140px',
    },
  },
  mainContainer: {
    background: '#222',
    margin: '3%',
    border: '2px solid tan',
    borderRadius: '5px',
  },
  mainContainer2: {
    display: 'inline-block',
    width: '94%',
    background: '#222',
    marginLeft: '3%',
    border: '2px solid tan',
    borderRadius: '5px',
    marginBottom: '3%',
  },
  skills: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: '1%',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '2px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'tomato',
    color: 'white',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: 'white',
    padding: '0',
    textTransform: 'uppercase',
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <Box style={{ height: '100%' }}>
        <Box className={classes.headerContainer}>
          <Typography
            variant="h6"
            align="justify"
            className={classes.headerTypography}>
            Hola! Soy{' '}
            <b style={{ color: 'tomato', textAlign: 'center' }}>Jorge</b>,
            Desarrollador Full Stack de Buenos Aires, Argentina 🇦🇷. Progamo
            principalmente en React pero disfruto de aprender nuevas tecnologías
            👨‍💻. Tengo conocimientos en marketing digital, diseño UX y
            comunicación 📰. Me gusta viajar, el trabajo en equipo y estudiar
            idiomas 🚀.
          </Typography>
          <img src={Image} alt="Me" className={classes.profileImage} />
        </Box>
        <Box component="header" className={classes.mainContainer}>
          <Typography variant="h4" align="center" className={classes.heading}>
            Work Experience
          </Typography>
          <Box component="div" className={classes.timeLine}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}>
              2020
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                className={classes.subHeading}
                style={{ color: 'tomato' }}>
                Full Stack / Web Design
              </Typography>
              <Typography variant="body1" style={{ color: 'tomato' }}>
                Freelance.
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  color: 'tan',
                  justifyContent: 'justify',
                  hyphens: 'auto',
                }}>
                •Trabajos de desarrollo web de manera Freelance. <br />
                •Utilización de ReactJS en el Frontend y NodeJS y MongoDB en
                Backend. API rest. Responsive Design.
                <br />
                •Participación en proyectos grupales: creación de un Chatbot.
              </Typography>
            </Box>

            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}>
              2018
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                className={classes.subHeading}
                style={{ color: 'tomato' }}>
                Data Entry / Data Base Control
              </Typography>
              <Typography variant="body1" style={{ color: 'tomato' }}>
                RecHospi Agrupación.
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'tan', textAlign: 'justify', hyphens: 'auto' }}>
                •Administrativo/Data entry, facturación de prestaciones médicas.
                <br /> •Logística y organización de documentación pública con
                manejo de Nomenclador Nacional. <br /> •Trabajo con base de
                datos a través de MYSQL. <br />
              </Typography>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}>
              2012
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                className={classes.subHeading}
                style={{ color: 'tomato' }}>
                Market Research
              </Typography>
              <Typography variant="body1" style={{ color: 'tomato' }}>
                GFK/IFR Monitoring.
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'tan', textAlign: 'justify', hyphens: 'auto' }}>
                •Investigación de mercado en Argentina y Latam. Trabajo en
                equipo.
                <br /> •Análisis de métricas de productos disponibles en tiendas
                físicas y online <br /> •Armado y presentación de informes con
                deadlines.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box component="header" className={classes.mainContainer}>
          <Typography variant="h4" align="center" className={classes.heading}>
            Education & Certifications
          </Typography>
          <Box component="div" className={classes.timeLine}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}>
              2020
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                className={classes.subHeading}
                style={{ color: 'tomato' }}>
                IT Courses
              </Typography>
              <Typography variant="body1" style={{ color: 'tomato' }}>
                Universidad Tecnológica Nacional (UTN) / Codo a Codo (GCBA)
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'tan', textAlign: 'justify', hyphens: 'auto' }}>
                •Diplomatura Professional Full Stack: ReactJS, Angular, Express,
                Node y MongoDB. <br />
                •Programa Codo a Codo Full Stack con orientación en Python.
                Introducción a Metodologías ágiles. <br />
                •Desarrollo web en HTML 5, CSS3 y Javascript.
                <br />
                •Experto en Diseño de Experiencia de Usuario e Interacciones.
              </Typography>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}>
              2018
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                className={classes.subHeading}
                style={{ color: 'tomato' }}>
                Licenciatura en Ciencias de la Comunicación.
              </Typography>
              <Typography variant="body1" style={{ color: 'tomato' }}>
                Universidad de Buenos Aires. (UBA)
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'tan', textAlign: 'justify' }}>
                •Orientación en periodismo. Promedio general: 8.
              </Typography>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}>
              2010
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                className={classes.subHeading}
                style={{ color: 'tomato' }}>
                Tecnicatura en Sonido y Grabación.
              </Typography>
              <Typography variant="body1" style={{ color: 'tomato' }}>
                Taller de Música de Buenos Aires (TAMABA)
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: 'tan', textAlign: 'justify' }}>
                •Mezcla y grabación de sonido. Sonido en vivo.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={classes.mainContainer2}>
          <div>
            <Typography variant="h4" align="center" className={classes.heading}>
              SKILLS & TECHNOLOGIES
            </Typography>
          </div>

          <div className={classes.skills}>
            <Box component="fieldset" borderColor="transparent">
              <Typography style={{ color: 'tan' }} component="legend">
                HTML5
              </Typography>
              <Rating name="read-only" value={5} readOnly />
            </Box>

            <Box component="fieldset" borderColor="transparent">
              <Typography style={{ color: 'tan' }} component="legend">
                CSS + SASS
              </Typography>
              <Rating name="read-only" value={4} readOnly />
            </Box>

            <Box component="fieldset" borderColor="transparent">
              <Typography style={{ color: 'tan' }} component="legend">
                JAVASCRIPT
              </Typography>
              <Rating name="read-only" value={4} readOnly />
            </Box>

            <Box component="fieldset" borderColor="transparent">
              <Typography style={{ color: 'tan' }} component="legend">
                REACTJS
              </Typography>
              <Rating name="read-only" value={4} readOnly />
            </Box>

            <Box component="fieldset" borderColor="transparent">
              <Typography style={{ color: 'tan' }} component="legend">
                ANGULAR JS
              </Typography>
              <Rating name="read-only" value={3} readOnly />
            </Box>

            <Box component="fieldset" borderColor="transparent">
              <Typography style={{ color: 'tan' }} component="legend">
                NODEJS
              </Typography>
              <Rating name="read-only" value={4} readOnly />
            </Box>

            <Box component="fieldset" borderColor="transparent">
              <Typography style={{ color: 'tan' }} component="legend">
                MYSQL/MONGODB
              </Typography>
              <Rating name="read-only" value={4} readOnly />
            </Box>

            <Box component="fieldset" borderColor="transparent">
              <Typography style={{ color: 'tan' }} component="legend">
                ENGLISH
              </Typography>
              <Rating name="read-only" value={5} readOnly />
            </Box>
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Resume;
