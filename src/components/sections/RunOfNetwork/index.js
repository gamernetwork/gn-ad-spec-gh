import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledRONSection from './style';

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/runofnetwork/" } }
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
      <StyledRONSection>
        <h2>Run Of Network</h2>
        <p>
          The following ads sizes run across all Gamer Network sites where those
          sizes are available.
        </p>
        <h3>Desktop</h3>
        <div
          className="table-wrapper ron-table"
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html,
          }}
        />
        <h3>Mobile</h3>
        <div
          className="table-wrapper ron-table"
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[1].node.html,
          }}
        />
        <p>
          <strong>*For video ads polite load is max 1.5mb</strong>
        </p>
        <p>**GamesIndustry.biz only</p>
        <p>
          <strong>
            All ads can be created in house via the Gamer Creative offering.
          </strong>
        </p>
        <p>
          Please refer to our <a href="#">HTML5 Guidelines</a> if supplying
          HTML5 creatives
        </p>
      </StyledRONSection>
    )}
  />
);
