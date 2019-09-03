import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadUser } from '../../actions/user';

const Dashboard = ({ loadUser, user: { loading, isAuthenticated } }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return loading && isAuthenticated === null ? (
    <div>Loading...</div>
  ) : (
    <Fragment>
      <div className='container'>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Welcome
        </p>
        {loadUser !== null ? (
          <Fragment>
            <div className='my-2'></div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a user, please add some info</p>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: state.user.isAuthenticated
});

export default connect(
  mapStateToProps,
  { loadUser }
)(Dashboard);
