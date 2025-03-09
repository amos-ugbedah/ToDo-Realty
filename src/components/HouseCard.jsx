// src/components/HouseCard.jsx
import { useNavigate } from "react-router-dom";

const HouseCard = ({ house }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/house/${house.id}`);
  };

  return (
    <div
      className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      onClick={handleClick}
    >
      {/* House Image */}
      <img
        src={house.images[0]} // Use the first image in the array
        alt={house.name}
        className="w-full h-48 object-cover"
      />

      {/* House Name (Bottom Left) */}
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
        <p className="text-lg font-semibold">{house.name}</p>
      </div>

      {/* Rating (Top Right) */}
      <div className="absolute top-0 right-0 bg-yellow-500 text-black px-2 py-1 rounded-bl-lg">
        ⭐{house.rating}
      </div>
    </div>
  );
};

export default HouseCard;