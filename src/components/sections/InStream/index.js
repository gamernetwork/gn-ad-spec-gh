/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledInStreamSection from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "instream/index.md" }) {
          childMarkdownRemark {
            html
          }
        }
      }
    `}
    render={data => (
      <StyledInStreamSection>
        <a className="anchor-point" id="in-stream" />
        <h2>Video</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
      </StyledInStreamSection>
    )}
  />
);
