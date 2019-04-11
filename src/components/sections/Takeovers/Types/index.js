import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledTakeoverType from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/takeovers/types/" } }
        ) {
          edges {
            node {
              html
              id
              frontmatter {
                title
                sites
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.edges.map(({ node: takeoverType }, index) => (
        <StyledTakeoverType order={index} key={takeoverType.id}>
          <h3>{takeoverType.frontmatter.title}</h3>
          {takeoverType.frontmatter.sites.length > 0 && (
            <p>
              <span>Sites:</span>{' '}
              {takeoverType.frontmatter.sites.map((site, index) => {
                if (index !== takeoverType.frontmatter.sites.length - 1) {
                  return site.charAt(0).toUpperCase() + site.slice(1) + ', ';
                } else {
                  return site.charAt(0).toUpperCase() + site.slice(1);
                }
              })}
            </p>
          )}
          <div
            className="table-wrapper"
            dangerouslySetInnerHTML={{ __html: takeoverType.html }}
          />
        </StyledTakeoverType>
      ))
    }
  />
);
