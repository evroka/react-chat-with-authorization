import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';


const SignInPage = ({ history }) =>
  <div className="text-center mt-5">
    <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.CHAT);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      
      <form className="form-signin text-center" onSubmit={this.onSubmit}>
        <label className="sr-only" for="inputEmail"></label>
        <input id="inputEmail" className="form-control" required="" autofocus=""
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="email"
          placeholder="Email Address"
        />
        <label className="sr-only" for="inputPassword"></label>
        <input id="inputPassword" className="form-control mt-3" required=""
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit" className="btn btn-lg btn-info btn-block mt-3">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};