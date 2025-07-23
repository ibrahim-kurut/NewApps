import React from "react";
import { FaUserPlus } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="bg-gray-300 p-4 w-full shadow-md ">
      <div className="flex items-center justify-between">
        <div className="bg-gray-800 text-orange-500 px-1 py-2 rounded-lg">
          <h2 className="text-lg font-semibold capitalize">todoapp</h2>
        </div>
        <div>
          <FaUserPlus size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
