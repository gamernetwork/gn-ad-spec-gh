import React, { Component } from 'react';
import WindowSizeListener from 'react-window-size-listener';
import Scrollspy from 'react-scrollspy';
import StyledNavigation from './StyledNavigation';

class Navigation extends Component {
  state = {
    windowWidth: window.innerWidth,
    hideNav: window.innerWidth <= 1024 ? true : false,
  };

  onResize = windowSize => {
    console.log(windowSize);
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

  render() {
    const { hideNav } = this.state;
    return (
      <StyledNavigation aria-hidden={hideNav}>
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
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#lead-times">Lead Times</a>
          </li>
          <li>
            <a href="#guidelines">Guidelines</a>
          </li>
          <li>
            <a href="#takeovers">Takeovers</a>
          </li>
          <li>
            <a href="#run-of-network">Run Of Network</a>
          </li>
          <li>
            <a href="#html5">HTML5</a>
          </li>
          <li>
            <a href="#custom-units">Custom Units</a>
          </li>
          <li>
            <a href="#programmatic">Programmatic</a>
          </li>
          <li>
            <a href="#in-stream">In-Stream</a>
          </li>
          <li>
            <a href="#compliance">Compliance</a>
          </li>
        </Scrollspy>
      </StyledNavigation>
    );
  }
}

export default Navigation;
