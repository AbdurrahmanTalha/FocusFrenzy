import React from 'react';

const BlackButton = ({ children }) => {
    return (
        <button className='border-[2px] relative font-semibold overflow-hidden outline-none z-[1] border-[#ff3636] px-[15px] py-[5px] text-center tracking-[0.9px] fill text-black' >
            {children}
        </button >
    );
};

export default BlackButton;
