import Request from 'superagent';
const API_URL = 'http://localhost:3001/'

module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    authRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function authRequest(email, pass, cb) {
  Request
    .post(API_URL + 'user/auth')
    .send({
      email: email,
      password: pass
    })
    .end((err, res) => {
      if (res.status === 200) {
        cb({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        })
      } else {
        cb({ authenticated: false })
      }
    })
  // setTimeout(() => {
  //   if (email === 'joe@example.com' && pass === 'password1') {
  //     cb({
  //       authenticated: true,
  //       token: Math.random().toString(36).substring(7)
  //     })
  //   } else {
  //     cb({ authenticated: false })
  //   }
  // }, 0)
}
