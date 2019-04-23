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
    margin-right: 1rem;
  }

  hr {
    margin: 3rem 0;
    opacity: 0.25;
  }

  .table-wrapper {
    margin-top: 2rem;
  }

  .custom-unit-wrapper {
    max-width: var(--max-copy-width);

    .gatsby-image-wrapper {
      margin: 1.5rem 0;
    }
  }
`;

export default StyledCustomSection;
