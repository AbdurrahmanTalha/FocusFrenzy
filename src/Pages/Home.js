import React from 'react';
import Navbar from '../Components/Global/Navbar';
import Banner from '../Components/Home/Banner';
import Services from '../Components/Home/Services';

const Home = () => {
    return (
        <div className=" ">
            <div className='bg-[rgb(12,12,12)] h-[100%] px-[50px] pt-[10px]'>
                <Navbar />
                <Banner />
            </div>
            <div className="px-[50px] pt-[10px]">
                <Services />
            </div>
        </div>
    );
};

export default Home;
