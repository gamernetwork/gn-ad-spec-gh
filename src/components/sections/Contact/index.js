import React from 'react';
import StyledContactSection from './style';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default () => (
  <StyledContactSection>
    <a className="anchor-point" id="contact" />
    <h2>Contact</h2>
    <p>
      If you have any futher questions, please feel free to contact us at the
      following email addresses:
    </p>
    <h3>Creative</h3>
    <span>contact@gamercreative.com</span>
    <CopyToClipboard text="contact@gamercreative.com">
      <button className="email-address">Copy to clipboard</button>
    </CopyToClipboard>
    <h3>Trafficking</h3>
    <span>trafficking@gamernetwork.net</span>
    <CopyToClipboard text="trafficking@gamernetwork.net">
      <button className="email-address">Copy to clipboard</button>
    </CopyToClipboard>
  </StyledContactSection>
);
