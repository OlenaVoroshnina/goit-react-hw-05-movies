import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Header = () => {
    return(
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </nav>  
            </header>
            <Outlet/>
        </>
    );
}