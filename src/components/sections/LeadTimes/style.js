import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledIntroSection = styled(StyledSection)`
  display: flex;
  flex-wrap: wrap;

  h3:first-of-type {
    margin-top: 0;
  }

  .lead-times__text {
    width: 60%;
    padding-right: 3rem;

    @media only screen and (max-width: 1024px) {
      width: 100%;
      padding-right: 0;
    }
  }

  .lead-times__image {
    flex-grow: 1;
    display: flex;

    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

export default StyledIntroSection;
