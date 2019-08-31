// import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';

// import { logout } from '../../actions/user';

// class Header extends Component {
//   state = {
//     headerShow: true
//   };

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   handleScroll = () => {
//     if (window.scrollY > 0) {
//       this.setState({
//         headerShow: false
//       });
//     } else {
//       this.setState({
//         headerShow: true
//       });
//     }
//   };
//   render() {
//     return (
//       <nav
//         className='navbar bg-dark'
//         position='fixed'
//         style={{
//           opacity: this.state.headerShow ? 1 : 0.6,
//           boxShadow: 'none',
//           padding: '10px 0ox',
//           transition: 'all 300ms ease-in'
//         }}
//       >
//         <h1>
//           <Link
//             className='navbar-logo'
//             style={{ textDecoration: 'none' }}
//             to='/'
//           >
//             <i className='fas fa-guitar ' /> SOUNDWAVES
//           </Link>
//         </h1>
//         <Fragment>
//           <ul>
//             <li>
//               <Link to=''>Items</Link>
//             </li>
//             <li>
//               <Link to='/register_login'>Login</Link>
//             </li>
//             <li>
//               <Link onClick={logout} to='#!'>
//                 <i className='fas fa-sign-out-alt' />{' '}
//                 <span className='hide-sm'>Logout</span>
//               </Link>
//             </li>
//           </ul>
//         </Fragment>
//       </nav>
//     );
//   }
// }

// export default Header;
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
        <Link onClick={logout} to='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
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
        <Link to='/register_login'>Login</Link>
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
