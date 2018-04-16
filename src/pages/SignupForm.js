import React from 'react';
import { connect } from 'react-redux';
import { requestSignup } from 'actions';

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
    this.props.requestSignup();
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
                Password: <input type="password" name="password" />
              </label>
              <br />
              <label>
                Password confirmation:{' '}
                <input type="password" name="password_confirmation" />
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
    requestSignup: () => {
      dispatch(requestSignup());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
