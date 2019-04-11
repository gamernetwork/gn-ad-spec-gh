import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledGuidelinesSection from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/guidelines/" } }
        ) {
          edges {
            node {
              id
              html
            }
          }
        }
      }
    `}
    render={data => (
      <StyledGuidelinesSection>
        <h2>General Guidelines</h2>
        <div className="good">
          <h3>Good Practice:</h3>
          <ul
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[1].node.html,
            }}
          />
        </div>
        <div className="bad">
          <h3>Bad Practice:</h3>

          <ul
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html,
            }}
          />
        </div>
      </StyledGuidelinesSection>
    )}
  />
);
