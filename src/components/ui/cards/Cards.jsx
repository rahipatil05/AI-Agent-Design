import React from 'react';

const Card = ({ name }) => {
  return (
    <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#1d1d1d]">
      <div className="absolute flex items-center justify-center text-white z-1 opacity-90 rounded-xl inset-0.5 bg-[#000000]">
        {name}
      </div>

      <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2" />
    </div>
  );
};

export default Card;
