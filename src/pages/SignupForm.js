import React from 'react';
import { connect } from 'react-redux';
import { createUser } from 'actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password, password_confirmation } = this.state;
    this.props.signupUser(email, password, password);
  }

  render() {
    const { isLoading } = this.props.auth;
    return (
      <div>
        {isLoading && <span>loading...</span>}
        {!isLoading && (
          <div>
            <h1>signup</h1>
            <form id="signup" onSubmit={this.handleSubmit}>
              <label>
                Email:{' '}
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
                />
              </label>
              <br />
              <label>
                Password:{' '}
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Password confirmation:{' '}
                <input
                  type="password"
                  name="password_confirmation"
                  value={this.state.password}
                />
              </label>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    signupUser: (email, password, password_confirmation) => {
      dispatch(createUser(email, password, password_confirmation));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
