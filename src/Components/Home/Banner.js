import React from 'react';
import Button from '../Global/WhiteButton';

const Banner = () => {
    return (
        <div className="lg:flex  justify-between items-center">
            <div>
                <h2 className="text-[45px] font-bold mb-[30px] text-[#fff] text-center">Capture <span className="text-[#ff3636]">Life's</span> Moments</h2>
                <p className='lg:md:w-[500px] text-[17px] mb-[20px] text-[#e5e5e5]'>Welcome to our photography website where we offer a wide range of services to capture your special moments. From portraits to events, we have you covered. Browse our services and book your next session today.</p>
                <div className="lg:md:flex-none flex lg:md:justify-start justify-center">
                    <Button>Learn More.</Button>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/K5JBX2Z/Abdurrahman-Talha-Photography-Banner-UI-UX-Camera-Human-b4fcca10-9054-45df-b79a-a913558566fb-removeb.png" alt="Camera" className="w-[500px]" />
            </div>
        </div>
    );
};

export default Banner;
