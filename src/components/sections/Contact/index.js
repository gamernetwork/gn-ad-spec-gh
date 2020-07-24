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
    <span><a href="mailto:sales@gamer-network.net">sales@gamer-network.net</a></span>
    <h3>In-house Design</h3>
    <span><a href="mailto:team@gamercreative.com">team@gamercreative.com</a></span>
    <h3>Ad Operations</h3>
    <span><a href="mailto:trafficking@gamer-network.net">trafficking@gamer-network.net</a></span>
    <h3>Programmatic</h3>
    <span><a href="mailto:programmatic@gamer-network.net">programmatic@gamer-network.net</a></span>
  </StyledContactSection>
);
