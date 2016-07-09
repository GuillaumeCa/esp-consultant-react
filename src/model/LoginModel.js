import Request from 'superagent';
const API_URL = 'http://localhost:3001/'

export default function login(data, cb) {
  Request
    .post(API_URL + 'user/auth')
    .send(data)
    .end(function (err, res) {
      if (err) console.log('erreur', err);
      cb(res)
    })
}
