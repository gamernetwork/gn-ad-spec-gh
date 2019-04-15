import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import StyledIntroSection from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "intro/index.md" }) {
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
        <h2>Introduction</h2>
        <div
          className="intro__text"
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
        <div className="intro__image">
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
