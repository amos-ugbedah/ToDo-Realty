import React from "react";

const FinancingOptions = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <img 
          src="/images/mortgage.webp" 
          alt="Mortgage approval document" 
          className="w-full rounded-lg mb-4"
        />
        <h1 className="text-2xl font-bold text-[#c7ae6a]">Financing Options</h1>
        <p className="mt-2 text-gray-700">
          Explore flexible mortgage plans, low-interest financing, and easy installment payment options to make your dream home more affordable.
        </p>
        <img 
          src="/images/repay.png" 
          alt="Loan repayment plan infographic" 
          className="w-full rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default FinancingOptions;
