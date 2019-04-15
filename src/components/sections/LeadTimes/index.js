import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import StyledIntroSection from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "leadtimes/index.md" }) {
          childMarkdownRemark {
            html
            frontmatter {
              imageright {
                childImageSharp {
                  fluid(maxWidth: 500) {
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
    `}
    render={data => (
      <StyledIntroSection>
        <h2>Lead Times</h2>
        <div
          className="lead-times__text"
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
        <div className="lead-times__image">
          <Img
            fluid={
              data.file.childMarkdownRemark.frontmatter.imageright
                .childImageSharp.fluid
            }
          />
        </div>
      </StyledIntroSection>
    )}
  />
);
