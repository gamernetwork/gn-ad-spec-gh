import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledGuidelinesSection = styled(StyledSection)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .good,
  .bad {
    width: 50%;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }

  .good {
    border-right: 2px #eee dashed;
    padding-right: 3.5rem;

    @media only screen and (max-width: 800px) {
      padding: 0;
      border-right: none;
    }
  }

  .bad {
    padding-left: 3.5rem;

    @media only screen and (max-width: 800px) {
      padding: 0;
    }
  }
`;

export default StyledGuidelinesSection;
