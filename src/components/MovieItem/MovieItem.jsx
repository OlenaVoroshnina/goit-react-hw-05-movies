import { Cast } from "components/Cast/Cast";
import { NavLink, Outlet } from "react-router-dom";
// import { Cast } from "components/Cast/Cast";

export const MovieItem = ({movie}) => {
    const {id, title, poster_path, overview, genres, vote_average } = movie;
    return( 
        
    <div>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width=''/>
            <div>
                <h2>{title}</h2>
                <p>User score: {vote_average? Math.round(vote_average * 10) : ''}%</p>
                <p><b>Overview</b></p>
                <p>{overview}</p>
                <p><b>Genres</b></p>
                <p>{genres? genres.map(genre => genre.name).join(' '): ''}</p>
            </div>
        </div>
        <div>
            <p>Additional information</p>
            <ul>
                <li><NavLink to={`/movies/${id}/cast`} >Cast</NavLink></li>
                <li><NavLink to= "review">Review</NavLink></li>
            </ul>
            
            
            

        </div>
        <Outlet/>
    </div>
    )

}