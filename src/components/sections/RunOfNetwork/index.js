/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

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
        <a className="anchor-point" id="run-of-network" />
        <h2>IAB Units</h2>
        <p>
          The following ads sizes run across all Gamer Network sites where those
          sizes are available.
        </p>
        <p>
          Please refer to our <a href="#html5">HTML5 Guidelines</a> if supplying
          HTML5 creatives
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
      </StyledRONSection>
    )}
  />
);
