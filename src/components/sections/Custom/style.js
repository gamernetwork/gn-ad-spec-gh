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

    @media only screen and (max-width: 1024px) {
      display: flex;
    }

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
    margin-left: 1rem;

    &:hover {
      background: var(--c-purp);
    }

    @media only screen and (max-width: 1024px) {
      margin-left: 0;
    }
  }

  .live-btn {
    border-color: var(--c-blue);
    color: var(--c-blue);
    margin-left: 1rem;

    img {
      filter: brightness(0.75);
    }

    &:hover {
      background: var(--c-blue);
    }

    @media only screen and (max-width: 1024px) {
      margin-left: 0;
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
