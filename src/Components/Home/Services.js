import React from 'react';
import Button from '../Global/Button';
import Title from '../Global/Title';

const Services = () => {
    return (
        <div className="text-center my-[30px]">
            <Title>Services</Title>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between items-center mt-[30px]">
                <div className="border-[#ff3636] border-4  mr-[10px] py-[20px] flex justify-center items-center">
                    <div>
                        <h2 className="text-2xl mb-[20px]">Food photography</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehmWJy-dggl6gKSFTHvWgZYfwIEubMbN69g&usqp=CAU" alt="food photography" className="mx-auto" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum est, consequatur voluptas corrupti tempore perspiciatis aperiam fugiat necessitatibus saepe.</p>
                        <Button>View More</Button>
                        <Button>Buy Now</Button>


                    </div>
                </div>
                <div className="border-[#ff3636] border-4 mr-[10px] py-[20px] flex justify-center items-center">
                    <div>
                        <h2 className="text-2xl mb-[20px]">Product photography</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehmWJy-dggl6gKSFTHvWgZYfwIEubMbN69g&usqp=CAU" alt="food photography" className="mx-auto" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum est, consequatur voluptas corrupti tempore perspiciatis aperiam fugiat necessitatibus saepe.</p>
                    </div>
                </div>
                <div className="border-[#ff3636] border-4  mr-[10px] py-[20px] flex justify-center items-center">
                    <div>
                        <h2 className="text-2xl mb-[20px]">Documentary-style photography</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehmWJy-dggl6gKSFTHvWgZYfwIEubMbN69g&usqp=CAU" alt="food photography" className="mx-auto" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum est, consequatur voluptas corrupti tempore perspiciatis aperiam fugiat necessitatibus saepe.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
