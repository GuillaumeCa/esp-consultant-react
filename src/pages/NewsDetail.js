import React, { Component } from 'react';

export default class NewsDetail extends Component {
    render() {
      return (
        <div>
          <h1 className="title title-sec">{this.props.titre}</h1>
          <span>{moment(this.props.date).format('dd/MM/YYYY HH:mm')}</span>
          <p>{this.props.desc}</p>
        </div>
      )
    }
}
