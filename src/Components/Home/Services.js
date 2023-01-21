import React from 'react';
import Title from '../Global/Title';
import BlackButton from '../Global/BlackButton';

const Services = () => {
    return (
        <div className="text-center my-[30px]">
            <Title>Services</Title>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between items-center mt-[30px]">
                <div className="border-[#ff3636] border-4  mr-[10px] py-[20px] flex justify-center items-center mb-[30px]">
                    <div >
                        <h2 className="text-2xl mb-[20px]">Food photography</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehmWJy-dggl6gKSFTHvWgZYfwIEubMbN69g&usqp=CAU" alt="food photography" className="mx-auto" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum est, consequatur voluptas corrupti tempore perspiciatis aperiam fugiat necessitatibus saepe.</p>
                        <div className="flex jusity-center items-center mx-auto mt-[10px]">
                            <div className="mr-[20px] ml-auto flex justify-center items-center">
                                <BlackButton>View More</BlackButton>
                            </div>
                            <div className="mr-auto flex justify-center items-center">
                                <BlackButton>Buy Now</BlackButton>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="border-[#ff3636] border-4 mr-[10px] py-[20px] flex justify-center items-center mb-[30px]">
                    <div>
                        <h2 className="text-2xl mb-[20px]">Product photography</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehmWJy-dggl6gKSFTHvWgZYfwIEubMbN69g&usqp=CAU" alt="food photography" className="mx-auto" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum est, consequatur voluptas corrupti tempore perspiciatis aperiam fugiat necessitatibus saepe.</p>
                        <div className="flex jusity-center items-center mx-auto mt-[10px]">
                            <div className="mr-[20px] ml-auto flex justify-center items-center">
                                <BlackButton>View More</BlackButton>
                            </div>
                            <div className="mr-auto flex justify-center items-center">
                                <BlackButton>Buy Now</BlackButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-[#ff3636] border-4  mr-[10px] py-[20px] flex justify-center items-center mb-[30px]">
                    <div>
                        <h2 className="text-2xl mb-[20px]">Documentary-style photography</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehmWJy-dggl6gKSFTHvWgZYfwIEubMbN69g&usqp=CAU" alt="food photography" className="mx-auto" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum est, consequatur voluptas corrupti tempore perspiciatis aperiam fugiat necessitatibus saepe.</p>
                        <div className="flex jusity-center items-center mx-auto mt-[10px]">
                            <div className="mr-[20px] ml-auto flex justify-center items-center">
                                <BlackButton>View More</BlackButton>
                            </div>
                            <div className="mr-auto flex justify-center items-center">
                                <BlackButton>Buy Now</BlackButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
