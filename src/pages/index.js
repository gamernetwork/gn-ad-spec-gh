import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import HtmlToReactParser from 'html-to-react';
import LayoutWrapper from '../components/LayoutWrapper';

const { Parser } = HtmlToReactParser;
const htmlParser = new Parser();

export const query = graphql`
  {
    file(relativePath: { eq: "index.md" }) {
      id
      childMarkdownRemark {
        id
        html
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const parsedHtml = htmlParser.parse(data.file.childMarkdownRemark.html);
  return (
    <Fragment>
      <LayoutWrapper>{parsedHtml}</LayoutWrapper>
    </Fragment>
  );
};

export default IndexPage;
