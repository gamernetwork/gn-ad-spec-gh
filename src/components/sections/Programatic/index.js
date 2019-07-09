/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledProgramaticSection from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "programatic/index.md" }) {
          childMarkdownRemark {
            html
          }
        }
      }
    `}
    render={data => (
      <StyledProgramaticSection>
        <a className="anchor-point" id="programmatic" />
        <h2>Programmatic</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
      </StyledProgramaticSection>
    )}
  />
);
