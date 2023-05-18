import { Link } from "react-router-dom";
import logo from "../../../assets/images/bhrom-logo1.png";
import { useState } from "react";


const NavBar = () => {

    const [user, setUser] = useState()

    const navItems = <>
        <li className="text-[#1C0E0B] font-bold text-xl"><Link>Home</Link></li>
        <li className="text-[#1C0E0B] font-bold text-xl"><Link>All Toys</Link></li>
        <li className="text-[#1C0E0B] font-bold text-xl"><Link>Add Toys</Link></li>
        <li className="text-[#1C0E0B] font-bold text-xl"><Link>My Toys</Link></li>
        <li className="text-[#1C0E0B] font-bold text-xl"><Link>Blogs</Link></li>
    </>

    return (
        <div className="navbar max-w-7xl mx-auto">
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
                    user ? <Link><button className="btn ">Log out</button></Link> :
                    <Link><button className="btn bg-[#1C0E0B]">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;