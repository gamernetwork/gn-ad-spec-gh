import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { Helmet } from 'react-helmet';

const SEO = () => {
  const { title, description } = useSiteMetadata();
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
