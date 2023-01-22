import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Global/Footer';
import Navbar from '../Components/Global/Navbar';

const Register = () => {
    return (
        <div className="bg-[#0a0a0a] h-[100vh]">
            <Navbar />
            <div className="lg:md:w-[400px] mt-[30px] mb-[50px] w-auto h-[500px] border-[3px] border-[#DA0037] mx-auto py-auto">
                <h2 className="text-3xl text-center mt-[20px] text-[#E5E5E5] "><span className="text-[#DA0037]">Focus</span>Franzy</h2>
                <form className="flex flex-col mt-[30px] px-[20px]">
                    <input type="email" placeholder="Write your email" className="mb-[30px] h-[40px]  px-[10px] rounded-[10px] border-[2px] border-[#DA0037] text-white bg-[#1d1d1d] " />
                    <input type="password" placeholder="Write your Password" className="mb-[30px] h-[40px]  px-[10px] rounded-[10px] border-[2px] border-[#DA0037] text-white bg-[#1d1d1d]" />
                    <input type="password" placeholder="Rewrite your password" className="mb-[30px] h-[40px]  px-[10px] rounded-[10px] border-[2px] border-[#DA0037] text-white bg-[#1d1d1d]" />
                    <button className="w-auto bg-[#DA0037] h-[40px] text-white rounded-[5px]">Create Your account</button>
                </form>
                <p className="text-white flex justify-center items-center mt-[20px]">Already got a account? <Link to="/login" className="text-[#DA0037]">Login!</Link></p>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
