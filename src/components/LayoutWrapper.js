import React, { Fragment } from 'react';
import styled from 'styled-components';
import SEO from './SEO';
import Navigation from './Navigation';

const PageWrapper = styled.main`
  width: 100%;
  max-width: 1920px;
  background: #fff;
`;

const ContentWrapper = styled.article`
  width: 100%;
  max-width: var(--wrapper-width);
  margin: 0 auto;
  padding: 1rem;
  min-height: 100vh;

  @media only screen and (min-width: 1024px) {
    padding: 0 4rem;
  }

  @media only screen and (min-width: 1920px) {
    padding: 0 2rem;
  }
`;

const LayoutWrapper = ({ children }) => (
  <Fragment>
    <SEO />
    <Navigation />
    <PageWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </PageWrapper>
  </Fragment>
);

export default LayoutWrapper;
