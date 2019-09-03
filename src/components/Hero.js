import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import { StaticQuery } from 'gatsby';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      {
        header: file(relativePath: { eq: "Ad_Spec_Header.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2160) {
              sizes
              srcSet
              aspectRatio
              base64
              src
              srcSetWebp
            }
          }
        }
        logo: file(relativePath: { eq: "Main_Header_Logo.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 250) {
              sizes
              srcSet
              aspectRatio
              base64
              src
              srcSetWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.header.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#474073`}
        >
          <div className="hero__inner">
            <Img className="logo" fluid={data.logo.childImageSharp.fluid} />
          </div>
        </BackgroundImage>
      );
    }}
  />
);

const Hero = styled(BackgroundSection)`
  position: fixed !important;
  top: 0;
  left: var(--nav-width);
  width: 100%;
  height: 14rem;
  background-position: 0 0;
  background-repeat: no-repeat;
  z-index: -1;
  background-size: auto;

  @media only screen and (max-width: 1024px) {
    left: 0;
  }

  .hero__inner {
    max-width: var(--wrapper-width);
    width: calc(100% - var(--nav-width));
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1024px) {
      width: 100%;
    }

    .logo {
      width: 250px;

      @media only screen and (max-width: 1024px) {
        width: 180px;
      }
    }
  }
`;

export default Hero;
