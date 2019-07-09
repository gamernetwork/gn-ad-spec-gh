import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledComplianceSection from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/compliance/" } }
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
      <StyledComplianceSection>
        <a className="anchor-point" id="compliance" />
        <h2>Compliance</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html,
          }}
        />
      </StyledComplianceSection>
    )}
  />
);
