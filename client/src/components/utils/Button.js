import React from 'react';
import { Link } from 'react-router-dom';

const MyButton = ({ addStyles, linkTo, title, type }) => {
  const buttons = () => {
    let template = '';

    switch (type) {
      case 'default':
        template = (
          <Link className='link_default' to={linkTo} {...addStyles}>
            {title}
          </Link>
        );
        break;
      default:
        template = '';
    }

    return template;
  };

  return <div className='my_link'>{buttons()}</div>;
};

export default MyButton;
