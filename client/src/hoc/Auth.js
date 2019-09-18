import React, { Component } from 'react';
import { connect } from 'react-redux';

import { auth } from '../actions/user';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function(ComposedClass, reload, adminRoute = null) {
  class AuthCheck extends Component {
    state = {
      loading: false
    };

    render() {
      const { loading } = this.state;
      if (loading) {
        return (
          <div className='main_loader'>
            <CircularProgress
              style={{ color: '#2196f3', height: '15rem', width: '15rem' }}
              thickness={7}
            />
          </div>
        );
      }
      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  }
  const mapStateToProps = state => ({
    user: state.user
  });

  return connect(mapStateToProps)(AuthCheck);
}
