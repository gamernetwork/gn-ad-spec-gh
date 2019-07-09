/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
                  fluid(maxWidth: 1280) {
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
        <a className="anchor-point" id="takeovers" />
        <h2>Takeovers</h2>
        <div
          className="text-wrapper"
          dangerouslySetInnerHTML={{
            __html: data.file.childMarkdownRemark.html,
          }}
        />
        <Types />
        <p className="html5-pointer">
          Please refer to our <a href="#html5">HTML5 Guidelines</a> if supplying
          HTML5 creatives
        </p>
      </StyledTakeoverSection>
    )}
  />
);
