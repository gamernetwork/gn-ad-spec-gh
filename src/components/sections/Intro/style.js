import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledIntroSection = styled(StyledSection)`
  display: flex;
  flex-wrap: wrap;

  .intro__text {
    width: 60%;
    padding-top: calc(var(--multiplier) / 1);
    padding-right: 2.5rem;

    @media only screen and (max-width: 800px) {
      width: 100%;
      padding-right: 0;
    }
  }

  .intro__image {
    flex-grow: 1;
    display: flex;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }

    .gatsby-image-wrapper {
      flex-basis: 480px;
      margin: auto;
      margin-right: 0;

      @media only screen and (max-width: 800px) {
        margin-right: auto;
        margin-top: calc(var(--multiplier) / 0.75);
      }
    }
  }
`;

export default StyledIntroSection;
