import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledTakeoverSection = styled(StyledSection)`
  display: flex;
  flex-wrap: wrap;

  .text-wrapper {
    width: 60%;
    padding-right: 3rem;
    padding-top: calc(var(--multiplier) / 0.75);

    @media only screen and (max-width: 1280px) {
      width: 100%;
      padding-right: 0;
    }
  }

  .img-wrapper {
    width: 40%;
    display: flex;

    @media only screen and (max-width: 1280px) {
      width: 100%;
    }
  }
`;

export default StyledTakeoverSection;
