import React, { useState } from "react";
import logo from "../../../public/images/2.png";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div className="mx-20  ">
      <div className="flex flex-row justify-between items-center min-w-full ">
        <img src={logo} alt="image is missing" height={100} width={100} />
        <ul className="lg:flex hidden  lg:flex-row  justify-center  items-center gap-10  text-lg font-medium text-gray-600 ">
          <li>Home</li>
          <li>About Us</li>
          <li>Tour</li>
          <li>Gallery</li>
          <li className="text-yellow-400">Contact Us</li>
        </ul>
        <button className="md:flex hidden text-base font-semibold border-2 py-3 px-6 bg-yellow-500 text-white outline-none border-none rounded-md">
          Enquire Now
        </button>

        {isOpenMenu ? (
          <MdOutlineMenu
            className="md:hidden block text-3xl"
            onClick={handleMenu}
          />
        ) : (
          <>
            <RxCross1
              className="md:hidden block text-3xl"
              onClick={handleMenu}
            />
            <div className="absolute pt-10 top-24 left-0 w-full h-full z-50 sm:fixed bg-white flex flex-col items-center gap-6 font-semibold text-2xl list-none">
              <li>Home</li>
              <li>About Us</li>
              <li>Tour</li>
              <li>Gallery</li>
              <li className="text-yellow-400">Contact Us</li>

              <button className=" mt-10 text-2xl font-semibold border-2 py-3 px-6 bg-yellow-500 text-white outline-none border-none rounded-md">
                Enquire Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
