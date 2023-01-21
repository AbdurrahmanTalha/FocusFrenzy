import React from 'react';

const Title = ({ children }) => {
    return (
        <h2 className="text-3xl text-[#333] underline underline-offset-[3px] decoration-[#ff3636]">{children}</h2>
    );
};

export default Title;
