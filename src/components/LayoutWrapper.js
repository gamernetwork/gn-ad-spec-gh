import React, { Fragment } from 'react';
import styled from 'styled-components';
import Head from './Head';
import Navigation from './Navigation';

const PageWrapper = styled.main`
  width: 100%;
  max-width: 1920px;
`;

const ContentWrapper = styled.article`
  width: 100%;
  max-width: var(--wrapper-width);
  margin: 4rem auto;
  padding: 1rem;
  min-height: 100vh;
  background: #fff;

  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;

const LayoutWrapper = ({ children }) => (
  <Fragment>
    <Head />
    <Navigation />
    <PageWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </PageWrapper>
  </Fragment>
);

export default LayoutWrapper;
