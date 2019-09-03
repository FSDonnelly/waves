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
      <Link to={linkTo} key={i}>
        {name}
      </Link>
    ));

  return (
    <div className='container'>
      <div className='user_container'>
        <div className='user_left_nav'>
          <h2>My Account</h2>
          <div className='links'>{generateLinks(links)}</div>
        </div>
        <div className='user_right_nav'>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
