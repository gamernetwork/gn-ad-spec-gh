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
                image {
                  id
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      sizes
                      srcSet
                      aspectRatio
                      base64
                      src
                      srcSetWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledCustomSection>
        <h2>Custom Units</h2>
        <p>
          Gamer Network offers rich media ads which differ from standard IAB
          sizes.
        </p>
        {data.allMarkdownRemark.edges.map(customUnit => (
          <div key={customUnit.node.id} className="custom-unit-wrapper">
            <h3>{customUnit.node.frontmatter.unit}</h3>
            <Img
              fluid={customUnit.node.frontmatter.image.childImageSharp.fluid}
            />
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
