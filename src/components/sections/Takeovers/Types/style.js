import styled from 'styled-components';

const StyledTakeoverType = styled.div`
  width: 100%;
  margin-top: calc(var(--multiplier) * 3);

  ${props => props.order === 0 && `margin-top: calc(var(--multiplier) * 4)`};

  h3 {
    margin-top: 0;
    margin-bottom: calc(var(--multiplier) * 1);
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
