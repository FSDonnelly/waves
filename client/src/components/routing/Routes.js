import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RegisterLogin from '../auth/RegisterLogin';
import Register from '../auth/Register';
import NotFound from '../layout/NoFound';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/register_login' component={RegisterLogin} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
