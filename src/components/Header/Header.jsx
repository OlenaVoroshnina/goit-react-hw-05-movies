import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" state={{ from: location }}>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
