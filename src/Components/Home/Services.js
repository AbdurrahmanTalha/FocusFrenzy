import React from 'react';
import Title from '../Global/Title';

const Services = () => {
    return (
        <div className="text-center mt-[30px]">
            <Title>Services</Title>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between items-center mt-[30px]">
                <div className="">
                    <h2>Testing 1</h2>
                </div>
                <div className="">
                    <h2>Testing 2</h2>
                </div>
                <div className="">
                    <h2>Testing 2</h2>
                </div>
            </div>
        </div>
    );
};

export default Services;
