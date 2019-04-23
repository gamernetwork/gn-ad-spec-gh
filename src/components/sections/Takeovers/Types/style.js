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
