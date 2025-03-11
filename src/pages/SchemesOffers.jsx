import { Gift, Home, Banknote } from "lucide-react";
import { Link } from "react-router-dom";

const SchemesOffers = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-[#c7ae6a] flex items-center gap-2">
          <Gift size={28} /> Schemes & Offers
        </h1>
        <p className="mt-2 text-gray-700">
          Explore our latest special offers, financing options, and government schemes to make home buying easier.
        </p>

        <div className="mt-6 space-y-4">
          <Link to="/schemes-offers/discounts" className="block">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
              <Home size={24} className="text-[#b99a45]" />
              <div>
                <h2 className="text-lg font-semibold">Limited-time Discounts</h2>
                <p className="text-gray-600">Get exclusive deals on selected properties.</p>
              </div>
            </div>
          </Link>

          <Link to="/schemes-offers/financing" className="block">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
              <Banknote size={24} className="text-[#b99a45]" />
              <div>
                <h2 className="text-lg font-semibold">Financing Options</h2>
                <p className="text-gray-600">Flexible payment plans and mortgage assistance.</p>
              </div>
            </div>
          </Link>

          <Link to="/schemes-offers/government" className="block">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
              <Gift size={24} className="text-[#b99a45]" />
              <div>
                <h2 className="text-lg font-semibold">Government Housing Schemes</h2>
                <p className="text-gray-600">Check if you qualify for subsidized housing.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchemesOffers;
