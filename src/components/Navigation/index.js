import React from 'react';
import Scrollspy from 'react-scrollspy';
import StyledNavigation from './StyledNavigation';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
        <AnchorLink href="#introduction">Introduction</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#lead-times">Lead Times</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#guidelines">Guidelines</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#takeovers">Takeovers</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#run-of-network">Run Of Network</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#html5">HTML5</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#custom-units">Custom Units</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#programmatic">Programmatic</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#in-stream">In-Stream</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#compliance">Compliance</AnchorLink>
      </li>
    </Scrollspy>
  </StyledNavigation>
);

export default Navigation;
