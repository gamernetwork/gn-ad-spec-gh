import styled from 'styled-components';

const Hero = styled.div`
  position: fixed;
  top: 0;
  left: calc(var(--nav-width));
  width: 1600px;
  height: 12rem;
  background: #555;
  z-index: -1;

  @media only screen and (max-width: 1024px) {
    left: 0;
    width: 100vw;
  }
`;

export default Hero;
