import styled from 'styled-components';
import headerImg from '../assets/Ad_Spec_Header.jpg';
import headerLogo from '../assets/Main_Header_Logo.png';

const Hero = styled.div`
  position: fixed;
  top: 0;
  left: calc(var(--nav-width));
  width: 100%;
  height: 14rem;
  background: #474073;
  background-image: url(${headerImg});
  background-size: var(--wrapper-width);
  background-repeat: no-repeat;
  background-position: 0 0;
  z-index: -1;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: calc(100% - var(--nav-width));
    max-width: var(--wrapper-width);
    height: 100%;
    background-image: url(${headerLogo});
    background-size: 250px;
    background-position: center center;
    background-repeat: no-repeat;

    @media only screen and (max-width: 1024px) {
      width: 100%;
    }

    @media only screen and (max-width: 600px) {
      width: 100%;
      background-size: 50%;
    }
  }

  @media only screen and (max-width: 1024px) {
    left: 0;
  }
`;

export default Hero;
