import React from 'react';

const MyButton = ({ buttonClassName, icon, message }) => {
  return (
    <button className={buttonClassName}>
      <i className={icon}></i>
      {message}
    </button>
  );
};

export default MyButton;
