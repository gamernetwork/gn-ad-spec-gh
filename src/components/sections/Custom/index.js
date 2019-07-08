import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import StyledCustomSection from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/custom/" } }) {
          edges {
            node {
              id
              html
              frontmatter {
                unit
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledCustomSection id="custom-units">
        <h2>Custom Units</h2>
        <p>
          Gamer Network offers rich media ads which differ from standard IAB
          sizes.
        </p>
        {data.allMarkdownRemark.edges.map(customUnit => (
          <div key={customUnit.node.id} className="custom-unit-wrapper">
            <h3>{customUnit.node.frontmatter.unit}</h3>
            <div
              className="table-wrapper"
              dangerouslySetInnerHTML={{ __html: customUnit.node.html }}
            />
            <button>View Live Example</button>
            <button>Download PSD Template</button>
            <hr />
          </div>
        ))}
      </StyledCustomSection>
    )}
  />
);
