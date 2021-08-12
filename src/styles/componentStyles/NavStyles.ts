import styled from 'styled-components';

export const StyledNav = styled.header`
  width: 100%;
  padding: 0 var(--rl-space);

  nav {
    height: var(--nav-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: flex;
  }

  ul li:not(:last-child) {
    margin-right: 40px;
  }
`;
