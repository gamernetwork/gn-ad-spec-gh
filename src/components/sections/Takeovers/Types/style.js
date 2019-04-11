import styled from 'styled-components';

const StyledTakeoverType = styled.div`
  width: 100%;
  margin-top: calc(var(--multiplier) * 2);

  ${props => props.order === 0 && `margin-top: calc(var(--multiplier) * 4)`};

  h3 {
    margin-top: 0;
    margin-bottom: calc(var(--multiplier) * 0.75);
  }

  span {
    font-weight: 700;
  }

  .table-wrapper {
    width: 100%;

    @media only screen and (max-width: 738px) {
      overflow-x: scroll;
    }
  }
`;

export default StyledTakeoverType;
