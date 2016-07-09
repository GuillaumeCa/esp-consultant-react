import React, { Component } from 'react';
import Request from 'superagent';
import News from './News';

export default class NewsList extends Component {

  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentWillMount() {
    var url = 'http://localhost:3001/news';
    Request.get(url).then((response) => {
      this.setState({
        news: response.body
      })
    })
  }

  render() {
    return (
        <ul className="news-list">
          {this.state.news.map((news) => {
            return <News key={news._id} titre={news.titre} desc={news.desc} date={news.date}/>
          })}
        </ul>
    )
  }
}
