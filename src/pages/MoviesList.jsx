import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Loader } from 'components/Loader/Loader';


export const MoviesList = ({movies}) => {
  const location = useLocation();
    return (
        <>
          
          <ul style = {{
            display:'flex',
            flexDirection: 'column',
            gap: '10px',
    
            }}>
            {movies.length > 0 && movies.map(movie => {
              const { id, title } = movie;
              return <NavLink to={`/movies/${id}`} state={{ from: location }} key={id}>{title}</NavLink>;
            })}
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      );
}