import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DashboardLayout from '../../hoc/DashboardLayout';
import { loadUser } from '../../actions/user';

const Dashboard = ({ loadUser, user: { loading, isAuthenticated } }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return loading && isAuthenticated === null ? (
    <div>Loading...</div>
  ) : (
    <Fragment>
      <div>Dashboard</div>
      <DashboardLayout></DashboardLayout>
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
