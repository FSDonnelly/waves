import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../actions/user';

import MyButton from '../../utils/Button';

const RegisterLogin = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    login(email, password);
    console.log('SUCCESS');
  };

  // Redirect if loggecd in
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='container'>
      <div className='ui two column stackable grid container'>
        <div className='column'>
          <h1>Resgistered Customers</h1>
          <p>If you have an account, please log in.</p>
          <form className='form' onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>
                <strong>Email address</strong>
              </label>
              <input
                type='email'
                name='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                onChange={e => onChange(e)}
                value={email}
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
                name='password'
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
                onChange={e => onChange(e)}
                value={password}
              />
              <MyButton
                type='submit'
                value='Login'
                message='Submit'
                buttonClassName='ui green inverted button'
                icon='icon user'
                addStyles={{
                  marginTop: '10px'
                }}
              />
            </div>
          </form>
        </div>
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
      </div>
    </div>
  );
};

RegisterLogin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(RegisterLogin);
