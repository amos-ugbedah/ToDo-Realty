// src/pages/HouseListings.jsx
import React from "react";
import { houses } from "../data/houses"; // Ensure house data exists
import { Link } from "react-router-dom";

const HouseListings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Available Houses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {houses.map((house) => (
          <div key={house.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={house.images[0]} alt={house.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{house.name}</h2>
              <p className="text-gray-600">{house.location}</p>
              <p className="text-lg font-semibold text-green-600">💰 {house.price}</p>
              <Link
                to={`/house/${house.id}`}
                className="mt-3 inline-block px-4 py-2 bg-[#b99a45] text-white font-semibold rounded-lg hover:bg-[#c7ae6a] transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseListings;
