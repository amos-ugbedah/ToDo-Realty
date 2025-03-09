// src/components/BackNextButtons.jsx
import { useNavigate } from "react-router-dom";

const BackNextButtons = ({ currentId, totalHouses }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
      >
        🔙 Back
      </button>
      <button
        onClick={() =>
          navigate(`/house/${currentId === totalHouses ? 1 : currentId + 1}`)
        }
        className="px-4 py-2 bg-[#b99a45] text-white rounded-md hover:bg-[#a8853a] transition-colors duration-300"
      >
        Next 🔜
      </button>
    </div>
  );
};

export default BackNextButtons;