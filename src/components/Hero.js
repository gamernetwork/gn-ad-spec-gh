import styled from 'styled-components';
import headerImg from '../assets/Ad_Spec_Header.jpg';

const Hero = styled.div`
  position: fixed;
  top: 0;
  left: calc(var(--nav-width));
  width: 100%;
  height: 12rem;
  background: #555;
  background-image: url(${headerImg});
  background-size: cover;
  background-position: 0 0;
  z-index: -1;

  @media only screen and (max-width: 1024px) {
    left: 0;
    width: 100vw;
  }
`;

export default Hero;
