import React, { Component } from 'react';
import moment from 'moment';

export default class News extends Component {

  render() {
    moment.locale('fr');
    return (
      <li className="news-item">
        <div className="date">
          <div className="day">{moment(this.props.date).format('D')}</div>
          <div className="month">{moment(this.props.date).format('MMMM')}</div>
        </div>
        <div className="text">
          <h1>{this.props.titre}</h1>
          <h2>{this.props.desc}</h2>
        </div>
      </li>
    )
  }
}
