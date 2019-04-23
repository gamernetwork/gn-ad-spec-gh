import styled from 'styled-components';

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: var(--nav-width);
  height: 100vh;
  transition: transform 300ms ease;
  z-index: 1;
  background: var(--c-blue-1);
  display: flex;

  ul {
    margin: auto;
    text-align: center;
  }

  li {
    list-style: none;
    margin-bottom: 1rem;
    transition: transform 200ms ease;
    transform: translate3d(0, 0, 0);
    will-change: transform;
    -webkit-backface-visibility: hidden;
  }

  .is-current {
    text-decoration: underline;
    transform: scale(1.1);
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  &[aria-hidden='true'] {
    transform: translateY(calc(100% - 3rem));
  }

  @media only screen and (max-width: 1024px) {
    width: 100vw;
    height: auto;
    bottom: 0;
    top: auto;
    left: auto;
    right: 0;
    transform-origin: 100% 100%;
    box-shadow: 0px -2px 12px 4px rgba(0, 0, 0, 0.15);

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
