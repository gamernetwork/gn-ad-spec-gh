import React, { Fragment } from 'react';
import styled from 'styled-components';
import SEO from './SEO';
import Navigation from './Navigation';

const PageWrapper = styled.main`
  width: 100%;
  max-width: 1920px;
`;

const ContentWrapper = styled.article`
  width: 100%;
  max-width: var(--wrapper-width);
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  min-height: 100vh;
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
