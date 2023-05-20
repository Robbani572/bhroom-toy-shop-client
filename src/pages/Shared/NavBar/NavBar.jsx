import { Link } from "react-router-dom";
import logo from "../../../assets/images/bhrom-logo1.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";


const NavBar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    const navItems = <>
        <li className="text-[#1C0E0B] font-bold text-xl"><Link to="/">Home</Link></li>
        <li className="text-[#1C0E0B] font-bold text-xl"><Link to="/alltoys">All Toys</Link></li>
        {user && <li className="text-[#1C0E0B] font-bold text-xl"><Link to="/addtoys">Add Toys</Link></li>}
        {user && <li className="text-[#1C0E0B] font-bold text-xl"><Link to="/mytoys">My Toys</Link></li>}
        <li className="text-[#1C0E0B] font-bold text-xl"><Link to="/blogs">Blogs</Link></li>
    </>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="">
                    <img className="w-72 pl-0" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link onClick={handleLogOut}><button className="btn bg-[#1C0E0B]">Log out</button></Link> :
                    <Link to="/login"><button className="btn bg-[#1C0E0B]">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;