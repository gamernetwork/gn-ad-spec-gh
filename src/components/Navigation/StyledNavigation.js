import styled from 'styled-components';

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateX(-100%);
  background: #222;
  transition: transform 300ms ease;
  z-index: 1;

  li {
    list-style: none;
  }

  .is-current {
    text-decoration: underline;

    > * {
      color: deeppink;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (min-width: 1024px) {
    width: var(--nav-width);
    transform: none;
  }
`;

export default StyledNavigation;
