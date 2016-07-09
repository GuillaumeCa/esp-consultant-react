import React, { Component } from 'react';

export default class Topbar extends Component {

  showuUserDetail() {
    if (this.props.user.loggedIn) {
      return (
        <div>          
          <div className="header-user-photo">
            <img src="img/me.jpg" alt="photo-profil"/>
          </div>
          <div className="header-user-detail">
            <span>{this.props.user().fullname}Guillaume CARRE</span>
            <span><i>deconnexion</i></span>
          </div>
        </div>
      )
    }
  }

  toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('open')
  }

  render() {
    return (
      <nav className="navbar">
          <div className="navbar-header">
            <div className="open-menu" onClick={this.toggleMenu}>☰</div>
            <a href="">Espace Consultant</a>
          </div>
          <div className="header-user-photo">
            <img src="img/me.jpg" alt="photo-profil"/>
          </div>
          <div className="header-user-detail">
            <span>Guillaume CARRE</span>
            <span><i>deconnexion</i></span>
          </div>
      </nav>
    )
  }
}
