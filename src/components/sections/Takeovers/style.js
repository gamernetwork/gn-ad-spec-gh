import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledTakeoverSection = styled(StyledSection)`
  display: flex;
  flex-wrap: wrap;

  .text-wrapper {
    width: 75%;
    padding-right: 3rem;
    p:first-of-type {
      margin-top: 0;
    }

    @media only screen and (max-width: 1280px) {
      width: 100%;
      padding-right: 0;
    }
  }

  .html5-pointer {
    margin-top: 3rem;
  }
`;

export default StyledTakeoverSection;
