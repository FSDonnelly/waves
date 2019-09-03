import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/user';

const Header = ({ user: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to=''>Items</Link>
      </li>
      <li>
        <Link to=''>
          <i className='shopping cart icon' />
          Cart
        </Link>
      </li>
      <li>
        <Link onClick={logout} to='/register_login'>
          <i className='sign-out alternate icon' />
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/register_login'>
          <i className='sign-in icon' />
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link className='navbar-logo' style={{ textDecoration: 'none' }} to='/'>
          <i className='fas fa-guitar ' /> SOUNDWAVES
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
