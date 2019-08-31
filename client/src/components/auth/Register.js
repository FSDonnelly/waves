import React from 'react';

import MyButton from '../../utils/Button';

const RegisterLogin = () => {
  return (
    <div className='container'>
      <div className='ui two column stackable grid container'>
        <div className='column'>
          <h1>New Customers</h1>
          <p>
            Create an account to recieve AWESOME deals and keep up to date on
            the newest items!!
          </p>
          <MyButton
            message='Create an Account'
            buttonClassName='ui inverted button segment'
            icon='icon user'
          />
        </div>
        <div className='column'>reg right</div>
      </div>
    </div>
  );
};

export default RegisterLogin;
