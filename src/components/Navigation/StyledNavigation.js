import styled from 'styled-components';

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: var(--nav-width);
  height: 100vh;
  transition: transform 200ms ease;
  z-index: 1;
  background: var(--c-blue-1);
  display: flex;
  flex-direction: column;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .nav-logo {
    max-width: 180px;
    margin: 2.5rem auto 1rem auto;

    @media only screen and (max-width: 1920px) {
      max-width: 150px;
    }

    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  ul {
    width: 100%;
    flex-grow: 1;
    margin-left: 0;
    font-size: 0.95rem;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1024px) {
      height: calc(100% - 3rem);
    }
  }

  li {
    position: relative;
    list-style: none;
    width: 100%;
    margin-top: 0;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    flex-grow: 1;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      font-weight: 700;
    }
  }

  .is-current {
    background: rgba(255, 255, 255, 0.1);
  }

  p {
    margin: 0;
    color: #fff;
    font-size: 0.875rem;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
  }

  &[aria-hidden='false'] {
    transform: translateY(0);
  }

  @media only screen and (max-width: 1024px) {
    width: 100vw;
    bottom: 0;
    top: auto;
    left: auto;
    right: 0;
    transform-origin: 100% 100%;
    box-shadow: 0px -2px 12px 4px rgba(0, 0, 0, 0.15);
    height: 75vh;
    transform: translateY(calc(100% - 3rem));

    &:after {
      position: absolute;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      content: 'MENU';
      color: #fff;
      font-weight: 500;
      letter-spacing: 0.025em;
      line-height: 1;
    }

    &[aria-hidden='false'] {
      &:after {
        content: 'CLOSE';
      }
    }

    ul {
      text-align: center;
      margin-left: 0;
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
  }
`;

export default StyledNavigation;
