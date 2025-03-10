import { useNavigate } from "react-router-dom";

const HouseCard = ({ house }) => {
  const navigate = useNavigate();

  // Handle undefined or invalid house prop
  if (!house || typeof house !== "object") {
    console.error("Invalid house prop:", house);
    return null; // Don't render anything if house is invalid
  }

  // Handle missing or invalid images array
  const imageUrl = house.images && house.images.length > 0 ? house.images[0] : "/default-house.jpg";

  // Handle missing or invalid rating
  const rating = house.rating || "N/A";

  const handleClick = () => {
    if (house.id) {
      navigate(`/house/${house.id}`);
    } else {
      console.error("Invalid house ID:", house.id);
    }
  };

  return (
    <div
      className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      onClick={handleClick}
    >
      {/* House Image */}
      <img
        src={imageUrl} // Use the first image or a default image
        alt={house.name || "House"}
        className="w-full h-48 object-cover"
      />

      {/* House Name (Bottom Left) */}
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
        <p className="text-lg font-semibold">{house.name || "Unknown House"}</p>
      </div>

      {/* Rating (Top Right) */}
      <div className="absolute top-0 right-0 bg-yellow-500 text-black px-2 py-1 rounded-bl-lg">
        ⭐{rating}
      </div>
    </div>
  );
};

export default HouseCard;