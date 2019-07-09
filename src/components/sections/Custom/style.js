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
    position: relative;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;

    img {
      width: 0.75rem;
      margin-right: 0.5rem;
    }

    &:hover {
      color: #fff;

      img {
        filter: grayscale(1) brightness(100);
      }
    }
  }

  .download-btn {
    border-color: var(--c-purp);
    color: var(--c-purp);

    &:hover {
      background: var(--c-purp);
    }
  }

  .live-btn {
    border-color: var(--c-blue);
    color: var(--c-blue);

    &:hover {
      background: var(--c-blue);
    }
  }

  hr {
    margin: 3rem 0;
    opacity: 0.25;
  }

  .table-wrapper {
    margin-top: 2rem;
  }
`;

export default StyledCustomSection;
