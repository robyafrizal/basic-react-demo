import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Dropdown
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { HomepageHeading } from './HomePageHeading';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'>
              <Container>
                <Menu.Item>Home</Menu.Item>
                <Dropdown item floating text='Project'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to='/todo'>Todo</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to='/tic-tac-toe'>Tic Tac Toe</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item position='right'>
                  <Button inverted={!fixed}>
                    <Link to='/login'>Log in</Link>
                  </Button>
                  <Button
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
