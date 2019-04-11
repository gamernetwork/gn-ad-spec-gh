import React, { Fragment } from 'react';
import styled from 'styled-components';
import Head from './Head';
import Navigation from './Navigation';

const PageWrapper = styled.main`
  width: 100%;
  max-width: 1600px;
  background: #fff;
`;

const ContentWrapper = styled.article`
  width: 100%;
  max-width: var(--wrapper-width);
  margin: 12rem auto;
  padding: 1rem;
  padding-top: calc(var(--multiplier) * 2);
  min-height: 100vh;

  @media only screen and (min-width: 1024px) {
    padding: calc(var(--multiplier) * 2);
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
