import React from 'react';
import Title from '../Global/Title';

const AboutUS = () => {
    return (
        <div className="pb-[30px]">
            <div className="text-center mb-[30px]">
                <Title>About US</Title>
            </div>
            <div className="lg:md:flex lg:md:items-center">
                <div className="lg:md:w-[50%]">
                    <p className="text-[16px] text-[#EDEDED] w-[100%] mt-[30px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quidem porro assumenda, dolore repellendus quisquam magni reprehenderit voluptate autem nostrum vitae dolorem cumque temporibus doloremque maxime id eveniet quaerat pariatur modi qui minus. Doloribus eius voluptatibus sapiente a incidunt dolor numquam et illum, sint ducimus corrupti? Sunt, iure maiores, iste hic necessitatibus quae illo corrupti non optio quasi aliquid labore officia cum? Quod voluptate, deleniti id voluptas officia quo dolorum esse iste laborum suscipit dicta error magnam? Dolorem esse architecto, veritatis similique cupiditate voluptatem tempore voluptatibus dolor pariatur illum repudiandae praesentium molestias nobis sed odit assumenda soluta. Modi natus corporis et consectetur sunt sequi similique ab officia, in reprehenderit doloremque recusandae perferendis porro expedita id unde a consequatur nostrum neque libero doloribus, tempore aspernatur maxime. Quo odio soluta cumque! Harum molestias dicta excepturi consequuntur quisquam doloremque dolorem magni assumenda sed mollitia et dolores voluptas debitis ipsum esse, deserunt modi pariatur!</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="h-[50%] w-[50%] ml-[30%]" />
                </div>
            </div>
        </div>
    );
};

export default AboutUS;
