import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Header = () => {
    return(
        <>
            <header>
                <nav>
                    <NavLink>Home</NavLink>
                    <NavLink>Movies</NavLink>
                </nav>  
            </header>
            <Outlet/>
        </>
    );
}