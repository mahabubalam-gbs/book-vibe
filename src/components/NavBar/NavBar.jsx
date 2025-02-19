import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const links = <>
        <li className="rounded-md mr-1.5"><NavLink to={'/'}>Home</NavLink></li>
        <li className="rounded-md mr-1.5"><NavLink to={'/listedBooks'}>Listed Books</NavLink></li>
        <li className="rounded-md"><NavLink to={'/pagesToRead'}>Pages to Read</NavLink></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm 
                        dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="text-xl font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu hover:bg-white menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to={'/signin'}><button className="btn btn-outline btn-success mr-3 text-black hover:text-white">Sign In</button></NavLink>
                <NavLink to={'/signup'}><button className="btn btn-outline btn-accent text-black hover:text-white">Sign Up</button></NavLink>
            </div>
        </div>
    );
};

export default NavBar;