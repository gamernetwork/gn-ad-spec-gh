import React, { Fragment } from 'react';
import styled from 'styled-components';
import SEO from './SEO';
import Navigation from './Navigation';

const ContentWrapper = styled.main`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 1rem;
  background: red;
`;

const LayoutWrapper = ({ children }) => (
  <Fragment>
    <SEO />
    <Navigation />
    <ContentWrapper>{children}</ContentWrapper>
  </Fragment>
);

export default LayoutWrapper;
