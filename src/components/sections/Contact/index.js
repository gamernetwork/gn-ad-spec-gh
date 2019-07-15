/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import StyledContactSection from './style';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clipboardIcon from '../../../assets/clipboard.svg';

export default () => (
  <StyledContactSection>
    <a className="anchor-point" id="contact" />
    <h2>Contact</h2>
    <p>
      If you have any futher questions, please feel free to contact us at the
      following email addresses:
    </p>
    <h3>Sales</h3>
    <span>sales@gamer-network.net</span>
    <CopyToClipboard text="sales@gamer-network.net">
      <button className="email-address">
        <img src={clipboardIcon} alt="clipboard"></img>
        Copy to clipboard
      </button>
    </CopyToClipboard>
    <h3>Creative</h3>
    <span>contact@gamercreative.com</span>
    <CopyToClipboard text="contact@gamercreative.com">
      <button className="email-address">
        <img src={clipboardIcon} alt="clipboard"></img>
        Copy to clipboard
      </button>
    </CopyToClipboard>
    <h3>Trafficking</h3>
    <span>trafficking@gamer-network.net</span>
    <CopyToClipboard text="trafficking@gamer-network.net">
      <button className="email-address">
        <img src={clipboardIcon} alt="clipboard"></img>
        Copy to clipboard
      </button>
    </CopyToClipboard>
    <h3>Programmatic</h3>
    <span>programmatic@gamer-network.net</span>
    <CopyToClipboard text="programmatic@gamer-network.net">
      <button className="email-address">
        <img src={clipboardIcon} alt="clipboard"></img>
        Copy to clipboard
      </button>
    </CopyToClipboard>
  </StyledContactSection>
);
