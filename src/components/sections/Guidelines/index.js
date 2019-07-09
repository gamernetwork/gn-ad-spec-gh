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
          <h3>Good Practice:</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: data.good.childMarkdownRemark.html,
            }}
          />
        </div>
        <div className="bad">
          <h3>Bad Practice:</h3>

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
