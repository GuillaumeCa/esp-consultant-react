import React, { Component } from 'react';
import NewsList from '../components/NewsList';
import Topbar from '../components/Topbar';
import AuthForm from '../components/AuthForm';

export default class Accueil extends Component {
  render() {
    return (
      <div className="sticky-footer">
        <Topbar />
        <div className="content-sticky">
          <div className="card-center">
            <h1 className="title title-center">Login</h1>
            <AuthForm />
          </div>
        </div>
        <footer className="footer">
          Copyright © 2016 Junior ISEP All Rights Reserved.
        </footer>
      </div>
    )
  }
}
