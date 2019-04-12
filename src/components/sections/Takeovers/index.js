import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import StyledTakeoverSection from './style';
import Types from './Types';

export default () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "takeovers/index.md" }) {
          childMarkdownRemark {
            html
            frontmatter {
              title
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
      <StyledTakeoverSection>
        <h2>{data.file.childMarkdownRemark.frontmatter.title}</h2>
        <div
          className="text-wrapper"
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
        <div className="img-wrapper">
          <Img
            fluid={
              data.file.childMarkdownRemark.frontmatter.imageright
                .childImageSharp.fluid
            }
          />
        </div>
        <Types />
        <p className="html5-pointer">
          Please refer to our <a href="#">HTML5 Guidelines</a> if supplying
          HTML5 creatives
        </p>
      </StyledTakeoverSection>
    )}
  />
);
