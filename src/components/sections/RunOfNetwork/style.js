import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledRONSection = styled(StyledSection)`
  p:first-of-type {
    margin-top: 0;
  }

  .ron-table {
    margin-bottom: calc(var(--multiplier) * 2);
    margin-top: calc(var(--multiplier) * 1);
  }
`;

export default StyledRONSection;
