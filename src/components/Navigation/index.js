import React from 'react';
import Scrollspy from 'react-scrollspy';
import StyledNavigation from './StyledNavigation';

const Navigation = () => (
  <StyledNavigation>
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

export default Navigation;
