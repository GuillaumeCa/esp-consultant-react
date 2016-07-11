import React, { Component } from 'react';
import moment from 'moment';
import NewsModel from '../model/NewsModel';
import {Link} from 'react-router';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      news: {}
    }
    moment.locale('fr');
  }

  componentWillMount() {
    NewsModel.getNews(this.props.params.slug, (item) => {
      console.log(item);
      this.setState({
        news: item
      })
    })
  }

  render() {
    return (
      <div>
        <Link to="/accueil" className="button button-sm button-grey">Retour</Link>
        <h1 className="title title-sec">{this.state.news.titre}</h1>
        <div className="card">
          <span className="card-top-detail">{moment(this.state.news.date).format('DD/MM/YYYY HH:mm')}</span>
          <p>{this.state.news.desc}</p>
        </div>
      </div>
    )
  }
}
