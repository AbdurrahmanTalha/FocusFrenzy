import React from 'react';
import Navbar from '../Components/Global/Navbar';
import AboutUS from '../Components/Home/AboutUS';
import Banner from '../Components/Home/Banner';
import Services from '../Components/Home/Services';

const Home = () => {
    return (
        <div className=" ">
            <div className='bg-[#0a0a0a] h-[100%] px-[50px] pt-[10px]'>
                <Navbar />
                <Banner />
            </div>
            <div className="px-[50px] pt-[10px] bg-[#0a0a0a]">
                <Services />
            </div>
            <div className="px-[50px] pt-[10px] bg-[#0a0a0a]">
                <AboutUS />
            </div>
        </div>
    );
};

export default Home;
