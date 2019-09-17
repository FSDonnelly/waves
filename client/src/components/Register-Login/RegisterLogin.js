import React from 'react';

import MyButton from '../utils/Button';

const RegisterLogin = () => {
  return (
    <div className='page_wrapper'>
      <div className='container'>
        <div className='register_login_container'>
          <div className='left'>
            <h1>New Customers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur quaerat ex ipsum nihil suscipit error porro eligendi
              laborum ipsa non excepturi numquam itaque, neque distinctio
              voluptas, vero, eius quas eveniet.
            </p>
            <MyButton
              type='default'
              title='Create an account'
              linkTo='/register'
              addStyles={{
                margin: '10px 0 0 0'
              }}
            />
          </div>
          <div className='right'>
            <h2>Registered Customer</h2>
            <p>If you have an account, please log in.</p>
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
