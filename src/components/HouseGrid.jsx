// src/components/HouseGrid.jsx
import React from "react";
import HouseCard from "./HouseCard";
import { houses } from "../data/houses";

const HouseGrid = () => {
  // Filter houses by location
  const housesLagos = houses.filter((house) => house.location === "Lagos");
  const housesAbuja = houses.filter((house) => house.location === "Abuja");
  const housesPorthacourt = houses.filter((house) => house.location === "Port Harcourt");
  const housesOtherCities = houses.filter(
    (house) =>
      !["Lagos", "Abuja", "Port Harcourt"].includes(house.location)
  );

  return (
    <div className="p-4">
      {/* Houses in Lagos */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Houses in Lagos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {housesLagos.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>

      {/* Houses in Abuja */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Houses in Abuja</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {housesAbuja.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>

      {/* Houses in Port Harcourt */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Houses in Port Harcourt</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {housesPorthacourt.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>

      {/* Houses in Other Cities */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Houses in Other Cities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {housesOtherCities.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseGrid;