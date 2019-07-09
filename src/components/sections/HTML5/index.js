import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledHTML5Section from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "html/index.md" }) {
          childMarkdownRemark {
            html
          }
        }
      }
    `}
    render={data => (
      <StyledHTML5Section>
        <a className="anchor-point" id="html5" />
        <h2>HTML5 Guidelines</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
      </StyledHTML5Section>
    )}
  />
);
