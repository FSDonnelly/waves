import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    name: 'My Account',
    linkTo: '/user/dashboard'
  },
  {
    name: 'User Information',
    linkTo: '/user/profile'
  },
  {
    name: 'My Cart',
    linkTo: '/user/cart'
  }
];

const DashboardLayout = ({ children }) => {
  const generateLinks = links =>
    links.map(({ name, linkTo }, i) => (
      <Link to={linkTo} key={i} style={{ textDecoration: 'none' }}>
        {name}
      </Link>
    ));

  return (
    <div className='container'>
      <div className='profile'>
        <div className='nav flex-column'>
          <h2>My Account</h2>
          <div className='links' style={{ display: 'grid' }}>
            {generateLinks(links)}
          </div>
        </div>
        <div className='nav flex-column'>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
