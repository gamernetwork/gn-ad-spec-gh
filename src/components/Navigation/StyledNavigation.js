import styled from 'styled-components';

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateY(-100%);
  background: #222;

  @media only screen and (min-width: 1024px) {
    width: var(--nav-width);
    transform: none;
  }
`;

export default StyledNavigation;
