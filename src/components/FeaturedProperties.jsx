import React from "react";
import HouseCard from "./HouseCard";
import { houses } from "../data/houses";

const FeaturedProperties = () => {
  const featuredHouses = houses.slice(0, 4); // Show only 4 houses

  return (
    <div className="py-12 bg-[#f7f3e9]">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Properties 🏡</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {featuredHouses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
