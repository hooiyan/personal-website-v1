import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          author
          keywords
          email
          socialHandle {
            github
            twitter
            instagram
            codepen
          }
          socialUrl {
            github
            twitter
            instagram
            codepen
          }
          themeColor
          siteLogo
        }
      }
    }
  `);

  const siteTitle = site.siteMetadata.title;
  const siteLogo = site.siteMetadata.siteLogo;
  const metaDescription = site.siteMetadata.description;
  const metaUrl = site.siteMetadata.siteUrl;
  const twitterHandle = `@${site.siteMetadata.socialHandle.twitter}`;

  return (
    <Helmet>
      <html lang='en' />
      <title>{title ? `${title} - Hooi Yan` : siteTitle}</title>
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <meta
        name='google-site-verification'
        content='MTlrve-gRD1UDIafB8OByt9yv0rZOJnCWlmhpxX6R-U'
      />

      <meta name='description' content={metaDescription} />
      <meta name='keywords' content={site.siteMetadata.keywords} />
      <meta name='theme-color' content={site.siteMetadata.themeColor} />

      <meta property='og:site_name' content='Hoe Hooi Yan' />
      <meta property='og:url' content={metaUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={siteLogo} />
      <meta property='og:image:type' content='image/png' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content={twitterHandle} />
      <meta name='twitter:creator' content={twitterHandle} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={siteLogo} />
    </Helmet>
  );
};

export default Head;
