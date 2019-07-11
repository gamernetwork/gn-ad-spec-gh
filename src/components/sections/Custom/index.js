/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import StyledCustomSection from './style';
import downloadIcon from '../../../assets/download_icon.png';
import viewIcon from '../../../assets/View_icon.png';

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/custom/" } }
          sort: { fields: [frontmatter___order], order: ASC }
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                unit
                template
                preview
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledCustomSection>
        <a className="anchor-point" id="custom-units" />
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
            <button
              onClick={() =>
                window.open(customUnit.node.frontmatter.preview, '_blank')
              }
              className="live-btn"
            >
              <img src={viewIcon} alt="view example" />
              View Live Example
            </button>
            <button
              onClick={() =>
                window.open(customUnit.node.frontmatter.template, '_blank')
              }
              className="download-btn"
            >
              <img src={downloadIcon} alt="download" />
              Download PSD Template
            </button>
            <hr />
          </div>
        ))}
      </StyledCustomSection>
    )}
  />
);
