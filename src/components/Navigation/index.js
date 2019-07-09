/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import WindowSizeListener from 'react-window-size-listener';
import Scrollspy from 'react-scrollspy';
import StyledNavigation from './StyledNavigation';
import Logo from '../../assets/side_Nav_Logo.png';

let initWindowWidth;

try {
  initWindowWidth = window.innerWidth;
} catch (e) {
  console.log(e);
}

class Navigation extends Component {
  state = {
    windowWidth: initWindowWidth,
    hideNav: null,
  };

  onResize = windowSize => {
    this.setState(
      {
        windowWidth: windowSize,
      },
      () => {
        const { windowWidth } = this.state;
        let hideNav;
        windowWidth <= 1024 ? (hideNav = true) : (hideNav = false);
        this.setState({
          hideNav,
        });
      }
    );
  };

  toggleNav = () => {
    const { hideNav, windowWidth } = this.state;
    if (windowWidth >= 1024) {
      return;
    }
    this.setState({
      hideNav: !hideNav,
    });
  };

  render() {
    const { hideNav } = this.state;
    return (
      <StyledNavigation aria-hidden={hideNav} onClick={this.toggleNav}>
        <img className="nav-logo" src={Logo} alt="gamer network logo" />
        <WindowSizeListener
          onResize={windowSize => this.onResize(windowSize.windowWidth)}
        />
        <Scrollspy
          items={[
            'introduction',
            'lead-times',
            'guidelines',
            'takeovers',
            'run-of-network',
            'html5',
            'custom-units',
            'programmatic',
            'in-stream',
            'compliance',
          ]}
          currentClassName="is-current"
        >
          <li>
            <a href="#introduction" />
            <p>Introduction</p>
          </li>
          <li>
            <a href="#lead-times" />
            <p>Lead Times</p>
          </li>
          <li>
            <a href="#guidelines" />
            <p>Guidelines</p>
          </li>
          <li>
            <a href="#takeovers" />
            <p>Takeovers</p>
          </li>
          <li>
            <a href="#run-of-network" />
            <p>Run Of Network</p>
          </li>
          <li>
            <a href="#html5" />
            <p>HTML5</p>
          </li>
          <li>
            <a href="#custom-units" />
            <p>Custom Units</p>
          </li>
          <li>
            <a href="#programmatic" />
            <p>Programmatic</p>
          </li>
          <li>
            <a href="#in-stream" />
            <p>In-Stream</p>
          </li>
          <li>
            <a href="#compliance" />
            <p>Compliance</p>
          </li>
          <li className="contact">
            <p>
              <strong>Contact:</strong> trafficking@gamer-network.net
            </p>
          </li>
        </Scrollspy>
      </StyledNavigation>
    );
  }
}

export default Navigation;
