// Login Component that loads the login view at "/" route

import React, { Component } from 'react'
import auth from '../../services/auth';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      isLoading: false,
    }
  }

  // Generic method to handle on change events of the input elements
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Handle the form submission.
  handleOnSubmit = (e) => {
    e.preventDefault();
    if (auth.login(this.state)) {
      this.props.history.push('/app');
    } else {
      this.setState({ error: 'Invalid Credentials!' });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto mt-5 p-5 border bg-light">
            <h3 className="text-center">Login</h3>
            {this.state.error ? <div className="alert alert-danger" role="alert">
              {this.state.error}
            </div> : null}
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input type="text" className="form-control" name="email" onChange={this.handleOnChange} placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" onChange={this.handleOnChange} placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default Login;
