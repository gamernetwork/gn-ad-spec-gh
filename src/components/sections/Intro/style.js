import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledIntroSection = styled(StyledSection)`
  display: flex;
  flex-wrap: wrap;

  .intro__text {
    width: 60%;
    padding-top: calc(var(--multiplier) / 1);
    padding-right: 2.5rem;

    @media only screen and (max-width: 720px) {
      width: 100%;
      padding-right: 0;
    }
  }

  .intro__image {
    flex-grow: 1;
    display: flex;

    .gatsby-image-wrapper {
      flex-basis: 480px;
      height: auto;
      margin: auto;
      margin-right: 0;
    }
  }
`;

export default StyledIntroSection;
