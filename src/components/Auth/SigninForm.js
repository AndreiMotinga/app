import React from 'react';
import { connect } from 'react-redux';
import { signin } from 'actions';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.handleSignin(email, password);
  };

  render() {
    const { isLoading } = this.props.auth;
    const { classes } = this.props;

    return (
      <div>
        {isLoading && <span>loading...</span>}
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

              <Button
                type="submit"
                variant="raised"
                color="primary"
                className={classes.button}
              >
                SIGN IN
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

const mapDispatchToProps = dispatch => {
  return {
    handleSignin: (email, password) => {
      dispatch(signin(email, password));
    }
  };
};

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
  withStyles(styles)(SigninForm)
);