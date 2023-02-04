import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 2px;

  &.active {
    color: teal;
  }
`;
