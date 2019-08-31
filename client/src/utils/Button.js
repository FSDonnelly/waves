import React from 'react';
import { Link } from 'react-router-dom';

const MyButton = ({
  addStyles,
  buttonClassName,
  icon,
  linkTo,
  message,
  type
}) => {
  const buttons = () => {
    let template = '';

    switch (type) {
      case 'default':
        template = (
          <Link
            className={buttonClassName}
            to={linkTo}
            type={type}
            style={addStyles}
          >
            <i className={icon}></i>
            {message}
          </Link>
        );
        break;
      default:
        template = '';
    }

    return template;
  };

  return <div>{buttons()}</div>;
};

export default MyButton;
