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
    width: 100%;
    margin-left: 0;
    margin: auto;
    font-size: 0.9rem;

    @media only screen and (max-width: 1440px) {
      font-size: 0.85rem;
    }
  }

  li {
    position: relative;
    list-style: none;
    width: 100%;
    margin-top: 0;
    padding: 0.75rem 0;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &:last-of-type {
      border-bottom: 0;
    }

    @media only screen and (max-width: 1440px) {
      padding: 0.5rem 0;
    }
  }

  .is-current {
    background: rgba(255, 255, 255, 0.1);
    font-weight: 700;
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
