import React from "react";

const GovernmentHousingSchemes = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <img 
          src="/images/bene.jpeg" 
          alt="Government housing beneficiaries" 
          className="w-full rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold text-[#c7ae6a]">Government Housing Schemes</h1>
        <p className="mt-2 text-gray-700">
          Check if you qualify for government-subsidized housing programs, low-income assistance, and first-time homebuyer grants.
        </p>
        <img 
          src="/images/gov.jpg" 
          alt="Government official handing over housing document" 
          className="w-full rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default GovernmentHousingSchemes;
