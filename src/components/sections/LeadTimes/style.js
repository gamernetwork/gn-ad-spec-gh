import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledIntroSection = styled(StyledSection)`
  display: flex;
  flex-wrap: wrap;

  .lead-times__text {
    width: 60%;
    padding-top: calc(var(--multiplier) / 1);
    padding-right: 3rem;

    @media only screen and (max-width: 1280px) {
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

    @media only screen and (max-width: 1280px) {
      width: 100%;
    }
  }
`;

export default StyledIntroSection;
