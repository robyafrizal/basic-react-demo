import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router';

import PrivateRoute from './components/PrivateRoute';
import Todo from './components/Todo';
import Game from './components/Game';
import LoginPage from './components/Login';
import AuthButton from './components/AuthButton';
import Logo from './assets/images/smile.png';
import { fakeAuth } from './components/helpers/fakeAuth';

function App(props) {
  return (
    <React.Fragment>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            <Image size='mini' src={Logo} style={{ marginRight: '1.5em' }} />
            Kind Komodo
          </Menu.Item>
          <Menu.Item>
            <Link to='/'>Home</Link>
          </Menu.Item>

          <Dropdown item simple text='Project'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to='/todo'>Todo</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/tic-tac-toe'>Tic Tac Toe</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {fakeAuth.isAuthenticated ? (
            <Menu.Item
              onClick={() => {
                fakeAuth.signout(() => props.history.push('/'));
              }}>
              Sign out
            </Menu.Item>
          ) : (
            <Menu.Item>
              <Link to='/login'>Login</Link>
            </Menu.Item>
          )}
        </Container>
      </Menu>

      <hr />

      <Switch>
        <Route exact path='/'>
          Ini Home
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>

        <PrivateRoute path='/todo'>
          <Todo />
        </PrivateRoute>

        <PrivateRoute path='/tic-tac-toe'>
          <Game />
        </PrivateRoute>
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(App);
