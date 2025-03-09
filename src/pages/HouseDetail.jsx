/* eslint-disable no-unused-vars */
// src/pages/HouseDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { houses } from "../data/houses";
import BackNextButtons from "../components/BackNextButtons";

const HouseDetail = () => {
  const { id } = useParams();
  const house = houses.find((h) => h.id === parseInt(id));

  // State to track full-screen image view
  const [fullScreenImage, setFullScreenImage] = useState(null);

  if (!house) {
    return <div className="p-4 text-red-500 text-center text-lg">House not found!</div>;
  }

  return (
    <div className="flex-1 p-6">
      <BackNextButtons currentId={house.id} totalHouses={houses.length} />
      
      {/* House Info */}
      <h1 className="text-3xl font-bold mt-4">{house.name}</h1>
      <p className="text-lg text-gray-600">{house.location}</p>
      <p className="mt-2 text-gray-700">{house.description}</p>
      <p className="text-lg font-semibold mt-2">⭐ Rating: {house.rating}</p>
      <p className="text-xl font-semibold text-green-600 mt-2">💰 Price: {house.price}</p>

      {/* Features */}
      <p className="text-lg font-semibold mt-6">🏡 Features:</p>
      <ul className="list-disc pl-5 text-gray-700">
        {Object.entries(house.features).map(([key, value]) => (
          <li key={key} className="capitalize">{key}: {value.toString()}</li>
        ))}
      </ul>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {house.images.length > 0 ? (
          house.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`House Image ${index + 1}`}
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg border border-gray-300 cursor-pointer"
              onClick={() => setFullScreenImage(img)} // Open full-screen image
            />
          ))
        ) : (
          <img
            src="https://via.placeholder.com/500"
            alt="No house available"
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        )}
      </div>

      {/* Full-Screen Image Viewer */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <img
            src={fullScreenImage}
            alt="Full View"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
          <button
            className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-300"
            onClick={() => setFullScreenImage(null)} // Close full-screen view
          >
            ✕ Close
          </button>
        </div>
      )}
    </div>
  );
};

export default HouseDetail;
