import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledIntroSection = styled(StyledSection)`
  display: flex;
  flex-wrap: wrap;

  .intro__text {
    width: 60%;
    padding-right: 3rem;

    @media only screen and (max-width: 1280px) {
      width: 100%;
      padding-right: 0;
    }
  }

  .intro__image {
    flex-grow: 1;
    display: flex;

    @media only screen and (max-width: 1280px) {
      width: 100%;
    }
  }
`;

export default StyledIntroSection;
