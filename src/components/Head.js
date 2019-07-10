import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { Helmet } from 'react-helmet';

const SEO = () => {
  const { title, description } = useSiteMetadata();
  return (
    <Helmet>
      <title>{title}</title>
      <html lang="en"></html>
      <meta name="description" content={description} />
      <link rel="stylesheet" href="https://use.typekit.net/emn6jca.css" />
    </Helmet>
  );
};

export default SEO;
