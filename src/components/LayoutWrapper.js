import React, { Fragment } from 'react';
import SEO from './SEO';
import Navigation from './Navigation';

const LayoutWrapper = ({ children }) => (
  <Fragment>
    <SEO />
    <Navigation />
    {children}
  </Fragment>
);

export default LayoutWrapper;
