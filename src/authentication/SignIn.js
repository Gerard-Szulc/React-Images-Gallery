import React, { Component } from 'react'
import { withUser } from '../contexts/users/Users';

class SignInForm extends Component {

  state = {
    username: '',
    password: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signIn(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <h2>Sign in</h2>
        {this.props.signInError && <p>{this.props.signInError.message}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            name="username"
            type="text"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <button>sign in</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignInForm)