import React from 'react';

const Navbar = () => {
    return (
        <div className="flex justify-between bg-transparent text-[#e5e5e5] mb-[30px]">
            <div>
                <h2 className="text-[24px] font-semibold"><span className="text-[#ff3636]">Focus</span>Frenzy</h2>
            </div>
            <div className="flex">
                <h3 className="mr-[10px] text-[18px] ">Home</h3>
                <h3 className="mr-[10px] text-[18px]">Services</h3>
                <h3 className="mr-[10px] text-[18px]">Contact US</h3>
            </div>
            <div className="flex">
                <h3 className="mr-[5px] text-[18px]">Login</h3>
                <p>/</p>
                <h3 className="mr-[5px] text-[18px]">Register</h3>
            </div>
        </div>
    );
};

export default Navbar;
