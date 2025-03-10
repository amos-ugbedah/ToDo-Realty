import React, { useState } from "react";
import HouseGrid from "../components/HouseGrid";

const FindAHome = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1">
      <input 
        type="text" 
        placeholder="Search by location, price, or name..."
        className="border p-2 rounded-md w-full"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <HouseGrid searchQuery={searchQuery} />
    </div>
  );
};

export default FindAHome;
