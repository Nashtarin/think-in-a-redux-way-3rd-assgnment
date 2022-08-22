import React from 'react';
import SingleCard from './SingleCard';

const CardGrid = () => {
    return (
        <div
        className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
    >
       <SingleCard/>
      
          </div>
    );
};

export default CardGrid;