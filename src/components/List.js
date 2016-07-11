import React, { Component } from 'react';
import {Link} from 'react-router';

class Cell extends Component {

  render() {
    return (
      <li className="list-item">
        <div className="side-el">
          <div className="head">{this.props.data.head}</div>
          <div className="sub">{this.props.data.sub}</div>
        </div>
        <div className="text">
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.subtitle.substring(0,100)}</h2>
        </div>
      </li>
    )
  }
}

export default class List extends Component {
  render() {
    return (
        <ul className="list">
          {this.props.data.map((item) => {
            return (
              <Link key={item.id} to={"/accueil/news/" + item.slug} >
                <Cell data={item}/>
              </Link>
            )
          })}
        </ul>
    )
  }
}
