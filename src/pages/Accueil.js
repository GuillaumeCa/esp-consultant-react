import React, { Component } from 'react';
import List from '../components/List';
import NewsModel from '../model/NewsModel';

export default class Accueil extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    }
  }

  componentWillMount() {
    this.getNews();
  }

  getNews() {
    NewsModel.getAll((data) => {
      this.setState({
        news: data.map((item) => {
          return {
            id: item._id,
            slug: item.slug,
            head: item.day,
            sub: item.month,
            title: item.titre,
            subtitle: item.desc
          }
        })
      })
    })
  }

  render() {
    return (
      <div>
        <h1 className="title title-sec">Accueil</h1>
        <List data={this.state.news}/>
      </div>
    )
  }
}
