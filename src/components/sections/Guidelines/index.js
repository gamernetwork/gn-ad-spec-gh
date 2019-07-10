/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledGuidelinesSection from './style';

export default () => (
  <StaticQuery
    query={graphql`
      query guidelines {
        good: file(relativePath: { eq: "guidelines/good.md" }) {
          childMarkdownRemark {
            html
          }
        }
        bad: file(relativePath: { eq: "guidelines/bad.md" }) {
          childMarkdownRemark {
            html
          }
        }
      }
    `}
    render={data => (
      <StyledGuidelinesSection>
        <a className="anchor-point" id="guidelines" />
        <h2>General Guidelines</h2>
        <div className="good">
          <h3 className="good-heading">Good Practice:</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: data.good.childMarkdownRemark.html,
            }}
          />
        </div>
        <div className="bad">
          <h3 className="bad-heading">Bad Practice:</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: data.bad.childMarkdownRemark.html,
            }}
          />
        </div>
      </StyledGuidelinesSection>
    )}
  />
);
