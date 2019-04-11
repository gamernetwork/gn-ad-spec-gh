import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: calc(var(--multiplier) * 5);

  @media only screen and (max-width: 1280px) {
    margin-bottom: calc(var(--multiplier) * 2.5);
  }

  h2 {
    position: absolute;
    margin: 0;
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
