import React from 'react';
import { connect } from 'react-redux';
import { signup } from 'actions';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      pass_error: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, password_confirmation } = this.state;
    if (password !== password_confirmation) {
      this.setState({ pass_error: true });
      return;
    }

    this.props.handleSignup(email, password);
  };

  render() {
    const { isLoading, errors } = this.props.auth;
    const { classes } = this.props;
    const err_messages = errors.map(err => <li>{err}</li>);

    return (
      <div>
        {isLoading && <span>loading...</span>}

        {!!errors.length && <ul>{err_messages}</ul>}

        {!isLoading && (
          <div>
            <form onSubmit={this.handleSubmit} className={classes.container}>
              <TextField
                name="email"
                label="Email"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
                required
                fullWidth
                autoFocus
                margin="normal"
              />

              <TextField
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
                required
                fullWidth
                margin="normal"
              />

              <TextField
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                label="Password Confirmation"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                value={this.state.password_confirmation}
                required
                fullWidth
                margin="normal"
              />

              {this.state.pass_error && (
                <span id="password-confirmation-error">
                  Password confirmation doesn't match Password
                </span>
              )}

              <Button
                type="submit"
                variant="raised"
                color="primary"
                className={classes.button}
              >
                SIGN UP
              </Button>
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

const mapDispatchToProps = dispatch => ({
  handleSignup: (email, password) => {
    dispatch(signup(email, password));
  }
});

const styles = {
  container: {
    maxWidth: '250px',
    margin: '0 auto'
  },
  button: {
    display: 'block',
    margin: '30px auto 0'
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(SignupForm)
);
