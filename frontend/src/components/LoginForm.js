import React, { Component } from "react";
import ReactDOM from "react-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ isLoggedIn: true });
        } else {
          alert("Login failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Login</button>
        {this.state.isLoggedIn && <p>You are logged in</p>}
      </div>
    );
  }
}

ReactDOM.render(<Login />, document.getElementById("root"));