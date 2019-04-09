import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return site.siteMetadata;
};
