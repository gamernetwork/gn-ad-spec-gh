import styled from 'styled-components';
import StyledSection from '../StyledSection';

const StyledContactSection = styled(StyledSection)`
  margin-bottom: 6rem;
  p:first-of-type {
    margin-top: 0;
  }

  span {
  }

  .email-address {
    cursor: pointer;
    margin: 0;
    margin-left: 1rem;
    font-size: 0.875rem;

    @media only screen and (max-width: 1024px) {
      margin-left: 0;
      margin-top: 1rem;
    }

    &:hover {
      color: #fff;
      background: var(--c-blue);
      border-color: var(--c-blue);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

export default StyledContactSection;
