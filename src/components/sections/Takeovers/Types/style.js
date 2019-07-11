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
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;

    @media only screen and (max-width: 1024px) {
      display: flex;
      margin-left: 0;
    }

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

  .site-info {
    margin-bottom: 1.5rem;
    color: #515151;
    text-transform: lowercase;

    span {
      font-weight: 700;
      color: #333;
      text-transform: none;
    }
  }

  .table-wrapper p {
    margin-bottom: 1.5rem;
  }
`;

export default StyledTakeoverType;
