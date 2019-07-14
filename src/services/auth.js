// This is an authentication Interface to check and maintain the logged in users state.

class Auth {
  constructor() {
    this.authenticated = false;
  }

  // validate login credentials
  login(credentials) {
    if (credentials.email === 'admin' && credentials.password === '12345') {
      return this.authenticated = true;
    } else {
      return this.authenticated = false;
    }
  }

  // logout the user
  logout(cb) {
    this.authenticated = false;
    cb();
  }

  // return login status
  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth()