import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import RegisterLogin from '../auth/RegisterLogin';
import Register from '../auth/Register';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Dashboard from '../user/Dashboard';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register_login' component={RegisterLogin} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/user/dashboard' component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
