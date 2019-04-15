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
      <StyledInStreamSection id="in-stream">
        <h2>In-Stream Video</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
      </StyledInStreamSection>
    )}
  />
);
