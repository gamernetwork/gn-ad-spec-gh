import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledGuidelinesSection = styled(StyledSection)`
  display: flex;
  justify-content: space-between;

  .good,
  .bad {
    margin-top: calc(var(--multiplier) / 0.75);
    width: 50%;
  }

  .good {
    border-right: 2px #eee dashed;
    padding-right: 3rem;
  }

  .bad {
    padding-left: 3rem;
  }
`;

export default StyledGuidelinesSection;
