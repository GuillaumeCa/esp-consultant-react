import React, { Component } from 'react';
import login from '../model/LoginModel';
import { Router, browserHistory } from 'react-router';

export default class AuthForm extends Component {

  handleLogin() {
    console.log();
    login({
      email: this.refs.emailTextInput.value,
      password: this.refs.passwordTextInput.value
    }, function (res) {
      if (res.status === 200) {
        browserHistory.push('/');
      } else {
        browserHistory.push('/login');
        alert('error')
      }
    })
    console.log('login');
  }

  render() {
    return (
      <div className="form">
          <input type="text" placeholder="email" ref="emailTextInput"/>
          <input type="password" ref="passwordTextInput" placeholder="password"/>
          <button onClick={this.handleLogin.bind(this)}>Connexion</button>
      </div>
    )
  }
}
