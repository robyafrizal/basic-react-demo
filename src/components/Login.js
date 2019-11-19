import React from 'react';
import { withRouter } from 'react-router';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';

import logo from '../assets/images/smile.png';
import { fakeAuth } from './helpers/fakeAuth';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      from: ''
    };
  }

  componentDidMount() {
    this.setState({
      from: this.props.location.state || { from: { pathname: '/' } }
    });
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    const { name, from } = this.state;

    fakeAuth.authenticate(name, () => {
      this.props.history.replace(from.from);
    });
  };

  render() {
    // let { from } = this.props.location.state || { from: { pathname: '/' } };

    return (
      <Grid
        textAlign='center'
        style={{ height: '100vh' }}
        verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src={logo} /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='teal' fluid size='large' onClick={this.login}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(LoginPage);
