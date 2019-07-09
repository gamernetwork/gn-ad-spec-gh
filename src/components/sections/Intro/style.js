import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledIntroSection = styled(StyledSection)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p:first-of-type {
    margin-top: 0;
  }

  .intro__text {
    width: 60%;
    padding-right: 3rem;

    @media only screen and (max-width: 1280px) {
      width: 100%;
      padding-right: 0;
    }
  }

  .intro__image {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    .gatsby-image-wrapper {
      margin: none !important;
    }

    @media only screen and (max-width: 1280px) {
      width: 100%;
    }
  }
`;

export default StyledIntroSection;
