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
            variant='h6'
            align='justify'
            className={classes.headerTypography}
          >
            Hello! I am{' '}
            <b style={{ color: 'tomato', textAlign: 'center' }}>Jorge</b>, a
            Full Stack Developer based in Buenos Aires, Argentina. I create all
            kind of websites and applications combining different technologies.
            I preferably work with React JS on the Frontend and Node JS on the
            Backend. I keep updated with my work and try to learn something new
            everyday. 👨‍💻. Having a background in marketing and social
            communication is a plus. I love teamwork, coffee, traveling and
            studying languages 🚀.
          </Typography>
          <img src={Image} alt='Me' className={classes.profileImage} />
        </Box>
        <Box component='header' className={classes.mainContainer}>
          <Typography variant='h4' align='center' className={classes.heading}>
            Work Experience
          </Typography>
          <Box component='div' className={classes.timeLine}>
            <Typography
              variant='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}
            >
              2021
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
              <Typography
                variant='h5'
                className={classes.subHeading}
                style={{ color: 'tomato' }}
              >
                Full Stack / Web Design
              </Typography>
              <Typography variant='body1' style={{ color: 'tomato' }}>
                Freelance.
              </Typography>
              <Typography
                variant='subtitle1'
                style={{
                  color: 'tan',
                  justifyContent: 'justify',
                  hyphens: 'auto',
                }}
              >
                •Web Development, teamwork, creation of products from scratch.{' '}
                <br />
                •Implementation of diverse technologies like React JS in the
                front and Node JS in the Back. API Rest. Responsive design.
                <br />
                •Group work in projects like a realtime Chatbot and designing an
                NGO website.
              </Typography>
            </Box>

            <Typography
              variant='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}
            >
              2018
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
              <Typography
                variant='h5'
                className={classes.subHeading}
                style={{ color: 'tomato' }}
              >
                Data Entry / Data Base Control
              </Typography>
              <Typography variant='body1' style={{ color: 'tomato' }}>
                RecHospi Agrupación.
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: 'tan', textAlign: 'justify', hyphens: 'auto' }}
              >
                •Administrative/Data entry, medical services billing.
                <br /> •Logístics and organization of public documentation with
                handling of National Nomenclator. <br /> •Database use and
                control trough MYSQL. <br />
              </Typography>
            </Box>
            <Typography
              variant='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}
            >
              2012
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
              <Typography
                variant='h5'
                className={classes.subHeading}
                style={{ color: 'tomato' }}
              >
                Market Research
              </Typography>
              <Typography variant='body1' style={{ color: 'tomato' }}>
                GFK/IFR Monitoring.
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: 'tan', textAlign: 'justify', hyphens: 'auto' }}
              >
                •Market research in Argentina and Latinamerica. Teamwork.
                <br /> •Metrics analysis of electronic products available in
                different stores. <br /> •Reports creation for clients. Working
                with deadlines.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box component='header' className={classes.mainContainer}>
          <Typography variant='h4' align='center' className={classes.heading}>
            Education & Certifications
          </Typography>
          <Box component='div' className={classes.timeLine}>
            <Typography
              variant='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}
            >
              2020
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
              <Typography
                variant='h5'
                className={classes.subHeading}
                style={{ color: 'tomato' }}
              >
                IT Courses
              </Typography>
              <Typography variant='body1' style={{ color: 'tomato' }}>
                Universidad Tecnológica Nacional (UTN) / Codo a Codo (GCBA)
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: 'tan', textAlign: 'justify', hyphens: 'auto' }}
              >
                •Professional Full Stack: ReactJS, Angular, Express y Node.
                <br />
                •Codo a Codo Full Stack Program with Python specialization.
                Agile methodologies practice. <br />
                •Development in HTML, CSS and Javascript. Layout design.
                <br />
                •React Native IBM Skillsbuild course. Design of a weather app.
                <br />
                •Expert in UX and IxD design. User experience development.
              </Typography>
            </Box>
            <Typography
              variant='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}
            >
              2018
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
              <Typography
                variant='h5'
                className={classes.subHeading}
                style={{ color: 'tomato' }}
              >
                Social Communication College Degree.
              </Typography>
              <Typography variant='body1' style={{ color: 'tomato' }}>
                Universidad de Buenos Aires. (UBA)
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: 'tan', textAlign: 'justify' }}
              >
                •Specialization in journalism. Grade Point Average: 8/10.
              </Typography>
            </Box>
            <Typography
              variant='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem} `}
              style={{ borderRadius: '5px', border: 'none' }}
            >
              2010
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
              <Typography
                variant='h5'
                className={classes.subHeading}
                style={{ color: 'tomato' }}
              >
                Sound & Recording technician
              </Typography>
              <Typography variant='body1' style={{ color: 'tomato' }}>
                Taller de Música de Buenos Aires (TAMABA)
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ color: 'tan', textAlign: 'justify' }}
              >
                •Mixing and sound recording. Live bands sound.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={classes.mainContainer2}>
          <div>
            <Typography variant='h4' align='center' className={classes.heading}>
              SKILLS & TECHNOLOGIES
            </Typography>
          </div>

          <div className={classes.skills}>
            <Box component='fieldset' borderColor='transparent'>
              <Typography style={{ color: 'tan' }} component='legend'>
                HTML5
              </Typography>
              <Rating name='read-only' value={5} readOnly />
            </Box>

            <Box component='fieldset' borderColor='transparent'>
              <Typography style={{ color: 'tan' }} component='legend'>
                CSS + SASS
              </Typography>
              <Rating name='read-only' value={4} readOnly />
            </Box>

            <Box component='fieldset' borderColor='transparent'>
              <Typography style={{ color: 'tan' }} component='legend'>
                JAVASCRIPT
              </Typography>
              <Rating name='read-only' value={4} readOnly />
            </Box>

            <Box component='fieldset' borderColor='transparent'>
              <Typography style={{ color: 'tan' }} component='legend'>
                REACTJS
              </Typography>
              <Rating name='read-only' value={4} readOnly />
            </Box>

            <Box component='fieldset' borderColor='transparent'>
              <Typography style={{ color: 'tan' }} component='legend'>
                ANGULAR JS
              </Typography>
              <Rating name='read-only' value={3} readOnly />
            </Box>

            <Box component='fieldset' borderColor='transparent'>
              <Typography style={{ color: 'tan' }} component='legend'>
                NODEJS
              </Typography>
              <Rating name='read-only' value={4} readOnly />
            </Box>

            <Box component='fieldset' borderColor='transparent'>
              <Typography style={{ color: 'tan' }} component='legend'>
                MYSQL/MONGODB
              </Typography>
              <Rating name='read-only' value={4} readOnly />
            </Box>

            <Box component='fieldset' borderColor='transparent'>
              <Typography style={{ color: 'tan' }} component='legend'>
                ENGLISH
              </Typography>
              <Rating name='read-only' value={5} readOnly />
            </Box>
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Resume;
