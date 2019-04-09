import styled from 'styled-components';

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: var(--nav-width);
  height: 100vh;
  background: #222;

  @media only screen and (max-width: 1024px) {
    position: fixed;
    width: 100vw;
    transform: translateY(-100%);
  }
`;

export default StyledNavigation;
