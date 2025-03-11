import React from "react";

const LimitedTimeDiscounts = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <img 
          src="/images/discount.jpeg" 
          alt="Limited-time discount banner" 
          className="w-full rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold text-[#c7ae6a]">Limited-time Discounts</h1>
        <p className="mt-2 text-gray-700">
          Take advantage of exclusive discounts on selected properties. Enjoy price reductions, waived fees, and free upgrades for a limited time.
        </p>
        <img 
          src="/images/compare.png" 
          alt="Comparison chart of discounted vs normal prices" 
          className="w-full rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default LimitedTimeDiscounts;
