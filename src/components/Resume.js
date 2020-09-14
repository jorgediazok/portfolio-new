import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Navbar from './Navbar';
import Image from '../assets/images/profile.jpg';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '3%',
    padding: '2%',
    maxHeight: '3%',
    alignItems: 'center',
    background: '#222',
    color: 'tan',
    border: '2px solid tan',
    borderRadius: '5px',
  },

  profileImage: {
    borderRadius: '50%',
    maxHeight: '180px',
    margin: '1%',
    border: '2px solid #222',
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
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
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
      <Box className={classes.headerContainer}>
        <Typography variant="h6" align="center">
          Hola! Soy <b>Jorge</b>, desarrollador Full Stack viviendo en Buenos
          Aires, Argentina. Disfruto de capacitarme constantemente en nuevas
          tecnologías y aprender algo nuevo todos los días. Tengo un background
          en marketing y comunicación. Me gusta viajar, la música, las
          analíticas y aprender nuevos idiomas.
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
            style={{ borderRadius: '5px', border: 'none' }}
          >
            2007
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              className={classes.subHeading}
              style={{ color: 'tomato' }}
            >
              Market Research
            </Typography>
            <Typography variant="body1" style={{ color: 'tomato' }}>
              GFK/IFR Monitoring.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'tan', textAlign: 'justify' }}
            >
              • Investigación de mercado en Argentina. Trabajo con equipos en
              Latam. <br /> • Análisis de métricas y comparación de productos
              disponibles en tiendas físicas y online <br /> • Armado y
              presentación de informes con deadlines.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
            style={{ borderRadius: '5px', border: 'none' }}
          >
            2012
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              className={classes.subHeading}
              style={{ color: 'tomato' }}
            >
              Data Entry / Data Base Control
            </Typography>
            <Typography variant="body1" style={{ color: 'tomato' }}>
              RecHospi Agrupación.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'tan', textAlign: 'justify' }}
            >
              • Administrativo/Data entry, facturación de prestaciones médicas
              con sistema propio. <br /> • Logística, manejo y organización de
              documentación pública. Manejo de Nomenclador <br /> • Trabajo con
              base de datos a través de MYSQL. <br />
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
            style={{ borderRadius: '5px', border: 'none' }}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              className={classes.subHeading}
              style={{ color: 'tomato' }}
            >
              Full Stack / Web Design
            </Typography>
            <Typography variant="body1" style={{ color: 'tomato' }}>
              Freelance. (Hasta la actualidad)
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'tan', textAlign: 'justify' }}
            >
              • Trabajos de desarrollo web de manera Freelance. <br />
              • Utilización de frameworks como AngularJS y ReactJS en el
              Frontend y NodeJS y MongoDB en Backend. <br /> • Responsive
              Design.
              <br />
              •Conocimientos en Diseño UX, UI y IxD aplicados en proyectos
              <br />• Participé también en proyectos grupales como la creación
              de un Chatbot.
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
            style={{ borderRadius: '5px', border: 'none' }}
          >
            2007
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              className={classes.subHeading}
              style={{ color: 'tomato' }}
            >
              Tecnicatura en Sonido y Grabación.
            </Typography>
            <Typography variant="body1" style={{ color: 'tomato' }}>
              Taller de Música de Buenos Aires (TAMABA)
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'tan', textAlign: 'justify' }}
            >
              • Mezcla, grabación y masterización de sonido. Sonido en vivo.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
            style={{ borderRadius: '5px', border: 'none' }}
          >
            2010
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              className={classes.subHeading}
              style={{ color: 'tomato' }}
            >
              Licenciatura en Ciencias de la Comunicación.
            </Typography>
            <Typography variant="body1" style={{ color: 'tomato' }}>
              Universidad de Buenos Aires. (UBA)
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'tan', textAlign: 'justify' }}
            >
              • Especialización en periodismo y transmedia. Promedio general: 8.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem} `}
            style={{ borderRadius: '5px', border: 'none' }}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              className={classes.subHeading}
              style={{ color: 'tomato' }}
            >
              IT Certifications.
            </Typography>
            <Typography variant="body1" style={{ color: 'tomato' }}>
              Universidad Tecnológica Nacional (UTN)
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: 'tan', textAlign: 'justify' }}
            >
              • Professional Full-Stack Developer: Desarrollo con ReactJS,
              AngularJS, NodeJS, MYSQL y MongoDB. <br /> • Desarrollo web en
              HTML 5, CSS3 y Javascript (nivel avanzado) <br />• Experto en
              Diseño de Experiencia de Usuario e Interacciones (ux y ixd)
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
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography style={{ color: 'tan' }} component="legend">
              HTML5
            </Typography>
            <Rating name="read-only" value={5} readOnly />
          </Box>

          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography style={{ color: 'tan' }} component="legend">
              CSS + SASS
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Box>

          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography style={{ color: 'tan' }} component="legend">
              JAVASCRIPT
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Box>

          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography style={{ color: 'tan' }} component="legend">
              REACTJS
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Box>

          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography style={{ color: 'tan' }} component="legend">
              ANGULAR JS
            </Typography>
            <Rating name="read-only" value={3} readOnly />
          </Box>

          <Box component="fieldset" mb={3} borderColor="transparent">
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

          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography style={{ color: 'tan' }} component="legend">
              ENGLISH
            </Typography>
            <Rating name="read-only" value={5} readOnly />
          </Box>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Resume;
