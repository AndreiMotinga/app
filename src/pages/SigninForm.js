import React from 'react';
import { connect } from 'react-redux';
import { signin } from 'actions';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.handleSignin(email, password);
  }

  render() {
    const { isLoading } = this.props.auth;
    return (
      <div>
        {isLoading && <span>loading...</span>}
        {!isLoading && (
          <div>
            <h1>sign in</h1>
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
                  required
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
    handleSignin: (email, password) => {
      dispatch(signin(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
