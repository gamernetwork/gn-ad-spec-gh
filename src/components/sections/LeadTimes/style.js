import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledIntroSection = styled(StyledSection)`
  display: flex;
  flex-wrap: wrap;

  .lead-times__text {
    width: 50%;
    padding-top: calc(var(--multiplier) / 1);
    padding-right: 2.5rem;

    @media only screen and (max-width: 800px) {
      width: 100%;
      padding-right: 0;
    }

    h3:first-of-type {
      margin-top: calc(var(--multiplier) / 0.75);
    }
  }

  .lead-times__image {
    flex-grow: 1;
    display: flex;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }

    .gatsby-image-wrapper {
      flex-basis: 100%;
      height: 400px;
      margin: auto;
      margin-right: 0;

      @media only screen and (max-width: 800px) {
        height: auto;
        margin-right: auto;
        margin-top: calc(var(--multiplier) / 0.75);
      }
    }
  }
`;

export default StyledIntroSection;
