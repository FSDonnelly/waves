import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './components/layout/Home';
import Routes from './components/routing/Routes';

import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={Routes} />
          </Switch>
        </Layout>
      </Fragment>
    </Router>
  );
};

export default App;
