import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledInStreamSection = styled(StyledSection)`
  p:first-of-type {
    margin-top: 0;
  }

  table {
    margin: calc(var(--multiplier) * 1.5) 0 calc(var(--multiplier) * 1.75) 0;
  }
`;

export default StyledInStreamSection;
