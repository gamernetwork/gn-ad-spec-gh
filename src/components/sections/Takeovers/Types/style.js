import styled from 'styled-components';

const StyledTakeoverType = styled.div`
  width: 100%;
  margin-top: calc(var(--multiplier) * 2.5);

  ${props => props.order === 0 && `margin-top: calc(var(--multiplier) * 4)`};

  h3 {
    margin-top: 0;
    margin-bottom: calc(var(--multiplier) * 1);
  }

  button {
    border: none;
    font-size: 0.883rem;
    padding: 0.375rem 0.75rem;
    border: 2px solid #222;
    color: #222;
    margin-top: calc(var(--multiplier) * 1.25);
    cursor: pointer;

    &:hover {
      background: #222;
      color: #fff;
    }
  }

  hr {
    margin-top: calc(var(--multiplier) * 2.5);
    opacity: 0.25;
  }

  .site-info {
    margin-bottom: calc(var(--multiplier) * 1);
    color: #777;

    span {
      font-weight: 700;
      color: #333;
    }
  }
`;

export default StyledTakeoverType;
