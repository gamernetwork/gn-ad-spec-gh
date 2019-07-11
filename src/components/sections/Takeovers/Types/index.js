import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledTakeoverType from './style';
import downloadIcon from '../../../../assets/download_icon.png';
import viewIcon from '../../../../assets/View_icon.png';

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/takeovers/types/" } }
          sort: { fields: [frontmatter___order], order: ASC }
        ) {
          edges {
            node {
              html
              id
              frontmatter {
                title
                sites
                template
                preview
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
            <p className="site-info">
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
          {takeoverType.frontmatter.title !== 'Email' && (
            <button
              onClick={() =>
                window.open(takeoverType.frontmatter.preview, '_blank')
              }
              className="live-btn"
            >
              <img src={viewIcon} alt="view example" />
              View Live Example
            </button>
          )}
          {takeoverType.frontmatter.title !== 'Type 5' &&
            takeoverType.frontmatter.title !== 'Email' && (
              <>
                <button
                  onClick={() =>
                    window.open(takeoverType.frontmatter.template, '_blank')
                  }
                >
                  <img src={downloadIcon} alt="download" />
                  Download PSD Template
                </button>
              </>
            )}

          <hr />
        </StyledTakeoverType>
      ))
    }
  />
);
