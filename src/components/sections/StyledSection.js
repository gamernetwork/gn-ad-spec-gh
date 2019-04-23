import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 5rem;
  padding-top: 5rem;
  border-top: 2px solid #222;
  padding-left: 1.5rem;

  @media only screen and (max-width: 1024px) {
    padding-left: 0;
  }

  h2 {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    background: var(--c-blue-1);
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
      margin-top: 1.5rem;
    }
  }
`;

export default StyledSection;
