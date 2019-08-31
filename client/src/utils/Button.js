import React from 'react';
import { Link } from 'react-router-dom';

const MyButton = ({
  addStyles,
  buttonClassName,
  icon,
  linkTo,
  message,
  type,
  value
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
      case 'submit':
        template = (
          <input
            type={type}
            className={buttonClassName}
            value={value}
            style={addStyles}
          />
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
