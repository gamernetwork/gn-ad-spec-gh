import React, { Fragment } from 'react';
import SEO from './SEO';
import Navigation from './Navigation';

const LayoutWrapper = ({ children }) => (
  <Fragment>
    <SEO />
    <Navigation />
    <main>{children}</main>
  </Fragment>
);

export default LayoutWrapper;
