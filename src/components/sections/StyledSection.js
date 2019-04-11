import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: calc(var(--multiplier) * 4);
  padding-top: calc(var(--multiplier) / 0.275);
  border-top: 2px solid #222;
  padding-left: calc(var(--multiplier) * 1);

  @media only screen and (max-width: 1024px) {
    padding-left: 0;
  }

  h2 {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    background: #222;
    color: #fff;
    padding: 0.625rem 1.5rem;
    line-height: 1;
  }

  .table-wrapper {
    width: 100%;

    @media only screen and (max-width: 738px) {
      overflow-x: scroll;
    }
  }

  .gatsby-image-wrapper {
    flex-basis: var(--max-copy-width);
    margin: auto;

    @media only screen and (max-width: 1280px) {
      margin-left: 0;
      margin-top: calc(var(--multiplier) / 0.75);
    }
  }
`;

export default StyledSection;
