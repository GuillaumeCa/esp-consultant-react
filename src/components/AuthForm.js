import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import Auth from '../Auth';

export default class AuthForm extends Component {

  constructor() {
    super();
    this.state = {
      loggedIn: Auth.loggedIn()
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const EMAIL = this.refs.email.value;
    const PASS = this.refs.pass.value;

    Auth.login(EMAIL, PASS, (loggedIn) => {
      if (!loggedIn)
        return this.setState({error: true});
        browserHistory.push('/');
    });

  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="email" ref="email"/>
          <input type="password" ref="pass" placeholder="password"/>
          <button type="submit">Connexion</button>
          {this.state.error && (
           <p>Bad login information</p>
         )}
    </form>
    )
  }
}
