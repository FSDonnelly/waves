import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormField from '../utils/Form/FormField';
import { update } from '../utils/Form/formActions';

function mapStateToProps(state) {
  return {};
}

class Login extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password'
        },
        validation: {
          required: true,
          password: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  };

  updateForm = element => {
    const newFormData = update(element, this.state.formData, 'login');
    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  submitForm = e => {
    e.preventDefault();
  };

  render() {
    const {
      formData: { email, password }
    } = this.state;
    return (
      <div className='signin_wrapper'>
        <form onSubmit={e => this.submitForm(e)}>
          <FormField
            id={'email'}
            formData={email}
            change={element => this.updateForm(element)}
          />
          <FormField
            id={'password'}
            formData={password}
            change={element => this.updateForm(element)}
          />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
