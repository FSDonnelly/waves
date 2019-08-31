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
            type='default'
            linkTo='/register'
            message='Create an Account'
            buttonClassName='ui green inverted button'
            icon='icon user'
            addStyles={{
              margin: '10px 0 0 0 '
            }}
          />
        </div>
        <div className='column'>
          <form>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>
                <strong>Email address</strong>
              </label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
              <small id='emailHelp' className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>
                <strong>Password</strong>
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
              />
              <MyButton
                type='default'
                linkTo='/register'
                message='Submit'
                buttonClassName='ui green inverted button'
                icon='icon user'
                addStyles={{
                  margin: '10px 0 0 0 '
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
