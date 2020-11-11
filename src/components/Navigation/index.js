/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { Link } from 'gatsby';
import WindowSizeListener from 'react-window-size-listener';
import Scrollspy from 'react-scrollspy';
import StyledNavigation from './StyledNavigation';
import Logo from '../../assets/side_Nav_Logo.png';

let initWindowWidth;

if (typeof window !== `undefined`) {
  try {
    initWindowWidth = window.innerWidth;
  } catch (e) {
    console.log(e);
  }
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

  toggleNav = e => {
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
        <img
          onClick={() =>
            typeof window !== `undefined`
              ? window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                })
              : ''
          }
          className="nav-logo"
          src={Logo}
          alt="gamer network logo"
        />
        <WindowSizeListener
          onResize={windowSize => this.onResize(windowSize.windowWidth)}
        />
        <Scrollspy
          items={[
            'introduction',
            'lead-times',
            'guidelines',
            'html5',
            'takeovers',
            'custom-units',
            'run-of-network',
            'in-stream',
            'programmatic',
            'compliance',
            'contact',
          ]}
          currentClassName="is-current"
        >
          <li>
            <Link to="#introduction" aria-label="Jump to introduction" />
            <p>Introduction</p>
          </li>
          <li>
            <Link to="#lead-times" aria-label="Jump to lead times" />
            <p>Lead Times</p>
          </li>
          <li>
            <Link to="#guidelines" aria-label="Jump to guidelines" />
            <p>Guidelines</p>
          </li>
          <li>
            <Link to="#html5" aria-label="Jump to html5" />
            <p>HTML5</p>
          </li>
          <li>
            <Link to="#takeovers" aria-label="Jump to takeovers" />
            <p>Takeovers</p>
          </li>
          <li>
            <Link to="#custom-units" aria-label="Jump to custom units" />
            <p>Custom Units</p>
          </li>
          <li>
            <Link to="#run-of-network" aria-label="Jump to run of network" />
            <p>IAB Units</p>
          </li>
          <li>
            <Link to="#in-stream" aria-label="Jump to in-stream" />
            <p>Video</p>
          </li>
          <li>
            <Link to="#programmatic" aria-label="Jump to programmatic" />
            <p>Programmatic</p>
          </li>
          <li>
            <Link to="#compliance" aria-label="Jump to compliance" />
            <p>Compliance</p>
          </li>
          <li>
            <Link to="#contact" aria-label="Jump to contact" />
            <p>Contact</p>
          </li>
        </Scrollspy>
      </StyledNavigation>
    );
  }
}

export default Navigation;
