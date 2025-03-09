import React from 'react';
import HouseCard from './HouseCard';

const HouseList = ({ houses }) => {
  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
      {houses.map(house => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
};

export default HouseList;
