import React from "react";
import manImage from "../../.././public/images/12.png";
function SpecialOffer() {
  return (
    <div>
      <div className=" mb-10">
        <div className="w-full flex justify-start  ">
          <div className="w-4/12 bg-yellow-500 relative">
            <img src={manImage} className="h-64  absolute right-0 bottom-0" />
          </div>
          <div className="w-7/12 flex h-4/5 justify-center items-center pl-24 pe-28">
            <div className="flex flex-col justify-center items-center text-center w-full">
              <h1 className="text-4xl font-bold">
                Get special offers, and
                <br />
                more from Traveler
              </h1>
              <p className="my-7 text-gray-700">
                Subscribe to see secret deals prices
                <br />
                drop the moment you sign up!
              </p>
              <div className="border w-full flex justify-between px-4 py-2 rounded-s-full rounded-e-full border-gray-500 ">
                <input
                  type="text"
                  placeholder="Phone Number "
                  className="outline-none  "
                />
                <button className="bg-green-800 text-white rounded-s-full rounded-e-full px-5 py-3 ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
