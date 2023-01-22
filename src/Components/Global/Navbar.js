import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isHidden, setHidden] = useState(true);

    const removeHidden = () => {
        setHidden(!isHidden)
    }
    return (
        <div className="flex justify-between px-[50px] py-[10px] bg-[#0a0a0a]  text-[#e5e5e5] mb-[30px]">
            <div class="md:hidden flex items-center">
                <button class="outline-none mobile-menu-button" onClick={() => removeHidden()} >
                    <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div class={isHidden ? "hidden" : ""}>
                <ul className="">
                    <li ><Link to="/" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</Link></li>
                    <li><Link to="/services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</Link></li>
                    <li><Link to="/contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <h2 className="text-[24px] font-semibold"><span className="text-[#DA0037]">Focus</span>Frenzy</h2>
            </div>
            <div className="flex">
                <ul className="lg:md:flex hidden items-center">
                    <li><h3 className="mr-[10px] text-[18px]"><Link to="/">Home</Link></h3></li>
                    <li><h3 className="mr-[10px] text-[18px]"><Link to="/services">Services</Link></h3></li>
                    <li><h3 className="mr-[10px] text-[18px]"><Link to="/contact">Contact US</Link></h3></li>
                </ul>
            </div>
            <div className="flex">
                <ul className="flex items-center">
                    <li><h3 className="mr-[5px] text-[18px]"><NavLink to="/login">Login</NavLink></h3></li>
                    <li><h3 className="mr-[5px] text-[18px]"><NavLink to="/register">Register</NavLink></h3></li>
                </ul>
            </div>
        </div >
    );
};

export default Navbar;
