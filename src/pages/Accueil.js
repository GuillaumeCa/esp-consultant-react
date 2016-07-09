import React, { Component } from 'react';
import NewsList from '../components/NewsList';

export default class Accueil extends Component {
  render() {
    return (
      <div>
        <h1 className="title title-sec">Accueil</h1>
        <NewsList/>
      </div>
    )
  }
}
