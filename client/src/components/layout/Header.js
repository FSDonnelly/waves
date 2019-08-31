import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    headerShow: true
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: false
      });
    } else {
      this.setState({
        headerShow: true
      });
    }
  };
  render() {
    return (
      <nav
        className='navbar bg-dark'
        position='fixed'
        style={{
          opacity: this.state.headerShow ? 1 : 0.6,
          boxShadow: 'none',
          padding: '10px 0ox',
          transition: 'all 300ms ease-in'
        }}
      >
        <h1>
          <Link
            className='navbar-logo'
            style={{ textDecoration: 'none' }}
            to='/'
          >
            <i className='fas fa-guitar ' /> SOUNDWAVES
          </Link>
        </h1>
        <Fragment>
          <ul>
            <li>
              <Link to=''>Items</Link>
            </li>
            <li>
              <Link to='/register_login'>Login</Link>
            </li>
          </ul>
        </Fragment>
      </nav>
    );
  }
}

export default Header;
