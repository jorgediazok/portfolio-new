import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Route path="/" component={Home} exact />
      <Route path="/resume" component={Resume} />
    </React.Fragment>
  );
}

export default App;
