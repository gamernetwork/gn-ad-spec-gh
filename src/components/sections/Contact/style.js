import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledContactSection = styled(StyledSection)`
  margin-bottom: 6rem;
  p:first-of-type {
    margin-top: 0;
  }

  .email-address {
    cursor: pointer;
    margin: 0;
    margin-left: 1rem;
    font-size: 0.875rem;
    padding: 0.375rem 0.5rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    img {
      margin-right: 0.5rem;
    }

    @media only screen and (max-width: 1024px) {
      margin-left: 0;
      margin-top: 1rem;
    }

    &:hover {
      color: #fff;
      background: var(--c-blue);
      border-color: var(--c-blue);

      img {
        filter: invert(1);
      }
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

export default StyledContactSection;
