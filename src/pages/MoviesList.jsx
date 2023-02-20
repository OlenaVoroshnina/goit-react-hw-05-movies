import { NavLink } from "react-router-dom";

export const MoviesList = ({movies}) => {
    return (
        <>
          <h1>Trending today</h1>
          <ul style = {{
            display:'flex',
            flexDirection: 'column',
            gap: '10px',
    
            }}>
            {movies.map(movie => {
              const { id, title } = movie;
              return <NavLink key={id}>{title}</NavLink>;
            })}
          </ul>
        </>
      );
}