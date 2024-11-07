import React from "react";
import logo from "../../../public/images/2.png";
const Navbar = () => {
  return (
    <div className="mx-10 ">
      <div className="flex flex-row justify-between items-center min-w-full">
        <img src={logo} alt="image is missing" height={100} width={100} />
        <ul className="flex flex-row justify-center items-center gap-10 text-lg font-medium text-gray-600">
          <li>Home</li>
          <li>About Us</li>
          <li>Tour</li>
          <li>Gallery</li>
          <li className="text-yellow-400">Contact Us</li>
        </ul>
        <button className="text-base font-semibold border-2 py-3 px-6 bg-yellow-500 text-white outline-none border-none rounded-md">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
