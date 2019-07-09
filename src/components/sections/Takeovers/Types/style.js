import styled from 'styled-components';

const StyledTakeoverType = styled.div`
  width: 100%;
  margin-top: 3rem;

  ${props => props.order === 0 && `margin-top: 4.5rem`};

  h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  hr {
    margin-top: 3rem;
    opacity: 0.25;
  }

  button {
    position: relative;
    border-color: var(--c-purp);
    color: var(--c-purp);
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 0.75rem;
      margin-right: 0.5rem;
    }

    &:hover {
      background: var(--c-purp);
      color: #fff;

      img {
        filter: grayscale(1) brightness(100);
      }
    }
  }

  .site-info {
    margin-bottom: 1.5rem;
    color: #777;

    span {
      font-weight: 700;
      color: #333;
    }
  }
`;

export default StyledTakeoverType;
