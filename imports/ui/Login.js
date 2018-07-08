import React from "react";
import { Meteor } from "meteor/meteor";
import { Link, Redirect } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      redirectToReferrer: false
    };
  }

  onSubmit = e => {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({ email }, password, err => {
      if (err) {
        this.setState({ error: "Unable to login. Check email or password" });
      } else {
        this.setState({ redirectToReferrer: true });
      }
    });
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/login" }
    };

    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Login</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form
            className="boxed-view__form"
            onSubmit={this.onSubmit.bind(this)}
            noValidate
          >
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
            <button className="button">Login</button>
          </form>

          <Link to="/signup">Need an account?</Link>
        </div>
      </div>
    );
  }
}
