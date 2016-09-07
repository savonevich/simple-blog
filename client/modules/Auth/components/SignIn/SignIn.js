import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import * as actions from '../../AuthActions';
import forms from './../../../../styles/forms.css';

class SignIn extends Component {

  handleFormSubmit = () => {
    const emailRef = this.refs.email;
    const passwordRef = this.refs.password;

    if (emailRef.value && passwordRef.value) {
      this.props.signIn(emailRef.value, passwordRef.value);
      emailRef.value = passwordRef.value = '';
    }
  };

  render() {

    return (
      <div className={ forms['form'] }>
        <form className={ forms['form-content'] }>
          <h2
            className={ forms['form-title'] }>
            <FormattedMessage id="signInForm" />
          </h2>
          <input
            placeholder={ this.props.intl.messages.emailField }
            type="text"
            className={ forms['form-field'] }
            ref="email" />
          <input
            placeholder={ this.props.intl.messages.passwordField }
            type="password"
            className={ forms['form-field'] }
            ref="password" />
          <a
            className={ forms['post-submit-button'] }
            action="submit"
            onClick={ this.handleFormSubmit }>
            <FormattedMessage id="submit" />
          </a>
        </form>
      </div>
    );
  }
}

export default injectIntl(SignIn);
