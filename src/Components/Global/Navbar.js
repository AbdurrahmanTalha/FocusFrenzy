import React, { useState } from 'react';

const Navbar = () => {
    const [isHidden, setHidden] = useState(true);

    const removeHidden = () => {
        setHidden(!isHidden)
    }
    return (
        <div className="flex justify-between bg-transparent text-[#e5e5e5] mb-[30px]">
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
                    <li ><a href="" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                    <li><a href="" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
                    <li><a href="" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h2 className="text-[24px] font-semibold"><span className="text-[#ff3636]">Focus</span>Frenzy</h2>
            </div>
            <div className="flex">
                <ul className="lg:md:flex hidden items-center">
                    <li><h3 className="mr-[10px] text-[18px]">Home</h3></li>
                    <li><h3 className="mr-[10px] text-[18px]">Services</h3></li>
                    <li><h3 className="mr-[10px] text-[18px]">Contact US</h3></li>
                </ul>
            </div>
            <div className="flex">
                <ul className="flex items-center">
                    <li><h3 className="mr-[5px] text-[18px]">Login</h3></li>
                    <li><h3 className="mr-[5px] text-[18px]">Register</h3></li>
                </ul>
            </div>
        </div >
    );
};

export default Navbar;
