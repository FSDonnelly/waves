import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './components/layout/Home';
import Routes from './components/routing/Routes';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Routes} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
