import React, { Fragment } from 'react';
import styled from 'styled-components';
import Head from './Head';
import Navigation from './Navigation';

const PageWrapper = styled.main`
  width: 100%;
  background: #fff;
`;

const PageInner = styled.div`
  max-width: 1600px;
`;

const ContentWrapper = styled.article`
  width: 100%;
  max-width: var(--wrapper-width);
  margin: 16rem auto;
  margin-bottom: 0;
  min-height: 100vh;
  padding: 3rem 3rem;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 1rem 0rem 1rem;
  }
`;

const LayoutWrapper = ({ children }) => (
  <Fragment>
    <Head />
    <Navigation />
    <PageWrapper>
      <PageInner>
        <ContentWrapper>{children}</ContentWrapper>
      </PageInner>
    </PageWrapper>
  </Fragment>
);

export default LayoutWrapper;
