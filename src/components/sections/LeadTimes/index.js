/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledIntroSection from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "leadtimes/index.md" }) {
          childMarkdownRemark {
            html
          }
        }
      }
    `}
    render={data => (
      <StyledIntroSection>
        <a className="anchor-point" id="lead-times" />
        <h2>Lead Times</h2>
        <div
          className="lead-times__text"
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
      </StyledIntroSection>
    )}
  />
);
