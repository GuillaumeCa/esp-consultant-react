import React, { Component } from 'react';
import {Link} from 'react-router';
import Topbar from '../components/Topbar';
import AuthForm from '../components/AuthForm';
import Auth from '../Auth';

function Base({ children }) {
  return (
    <div className="sticky-footer">
      <Topbar />
      <div className="content-sticky">
        <div className="card-center">
          { children }
        </div>
      </div>
      <footer className="footer">
        Copyright © 2016 Junior ISEP All Rights Reserved.
      </footer>
    </div>
  )
}

export class Logout extends Component {
  constructor() {
    super();
    Auth.logout();
  }

  render() {
    return (
      <Base>
        <p className="text-info">Vous avez été déconnecté</p>
        <Link to="/login" className="button">Login</Link>
      </Base>
    )
  }
}

export class Login extends Component {
  render() {
    return (
      <Base>
        <h1 className="title title-center">Login</h1>
        <AuthForm />
      </Base>
    )
  }
}

export class NotFound extends Component {
  render() {
    return (
      <Base>
        404 error : page not found
      </Base>
    )
  }
}
