import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'>
            <i className='music icon' /> SOUNDWAVES
          </Link>
        </h1>
        <Fragment>
          <ul>
            <li>
              <Link to=''>Items</Link>
            </li>
            <li>
              <Link to=''>Register</Link>
            </li>
            <li>
              <Link to=''>Login</Link>
            </li>
          </ul>
        </Fragment>
      </nav>
    );
  }
}

export default Header;
