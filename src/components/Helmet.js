import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const Helmet = ({ theme = {} }) => (
  <StaticQuery
    query={graphql`
      query HelmetQuery {
        contentfulAbout {
          name
          description
          profile {
            bigIcon: resize(width: 192) {
              src
            }
            appleIcon: resize(width: 180) {
              src
            }
          }
        }
      }
    `}
    render={(data) => {
      const { name, description, profile } = data.contentfulAbout;
      const title = `${name}`;

      return (
        <ReactHelmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="theme-color" content={theme.background} />
          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:image" content={`https:${profile.bigIcon.src}`} />
          <meta name="og:site_name" content={title} />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={`https:${profile.bigIcon.src}`} />
          <meta
            name="twitter:image:src"
            content={`https:${profile.bigIcon.src}`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`https:${profile.appleIcon.src}`}
          />
        </ReactHelmet>
      );
    }}
  />
);

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default withTheme(Helmet);
