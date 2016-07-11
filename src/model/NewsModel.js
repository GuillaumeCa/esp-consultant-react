import Request from 'superagent';
import moment from 'moment';

const API_URL = 'http://localhost:3001';

class NewsModel {
  constructor() {
    moment.locale('fr');
  }

  getAll(cb) {
    Request.get(API_URL + '/news').then((response) => {
      var data = response.body;
      data.map((item) => {
        item.day = moment(item.date).format('D');
        item.month = moment(item.date).format('MMMM');
        return item;
      })
      cb(data);
    })
  }

  getNews(slug, cb) {
    Request.get(API_URL + '/news/' + slug).then((response) => {
      cb(response.body);
    })
  }

}

const newsModel = new NewsModel;

export default newsModel;
