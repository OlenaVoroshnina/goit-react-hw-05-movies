import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { HeaderBar } from './Header.styled';
import { HeaderLink } from './Header.styled';

const Header = () => {
  const location = useLocation();
  return (
    <>
      <HeaderBar>
        <nav>
          <HeaderLink  to="/" state={{ from: location }}>
            Home
          </HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </nav>
      </HeaderBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
