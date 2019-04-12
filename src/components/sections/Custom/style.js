import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledCustomSection = styled(StyledSection)`
  p:first-of-type {
    margin-top: 0;
  }

  h3 {
    margin-bottom: 0;
  }

  button {
    margin-right: calc(var(--multiplier) * 0.75);
  }

  hr {
    margin: calc(var(--multiplier) * 2.5) 0;
    opacity: 0.25;
  }

  .custom-unit-wrapper {
    max-width: var(--max-copy-width);

    .gatsby-image-wrapper {
      margin: calc(var(--multiplier) * 1.125) 0 calc(var(--multiplier) * 1.5) 0;
    }
  }
`;

export default StyledCustomSection;
