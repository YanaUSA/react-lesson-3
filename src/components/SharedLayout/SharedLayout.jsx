import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavItem } from './SharedLayouts.styled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavItem to="/">Home</NavItem>
            </li>
            <li>
              <NavItem to="add"> Add </NavItem>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
