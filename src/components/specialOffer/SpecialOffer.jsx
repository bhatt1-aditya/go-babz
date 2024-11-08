import React from "react";
import manImage from "../../.././public/images/14.png";
function SpecialOffer() {
  return (
    <div>
      <div>
        <div className="w-full flex xl:flex-row flex-col gap-20 justify-start  mt-32 ">
          <div className="xl:w-5/12 lg:w-8/12 sm:w-7/12 w-6/12 h-96 bg-yellow-500 relative">
            <img
              src={manImage}
              className=" absolute bottom-[-44px] right-[-200px] h-[550px]"
            />
          </div>
          <div className="xl:w-9/12 w-full  flex flex-col h-4/5 justify-center items-center   ">
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl  font-bold my-10">
                Get special offers, and
                <br />
                more from Traveler
              </h1>
              <p className="text-xl font-normal text-slate-600">
                Subscribe to see secret deals prices <br />
                drop the moment you sign up!
              </p>
            </div>
            <div className="border-2 border-gray-200 mt-5  w-1/2 flex justify-between  items-center rounded-s-full rounded-e-full ">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full outline-none py-5 ml-10"
              />
              <button className="border bg-green-800 text-white border-none px-5 py-3 my-1 mx-2  rounded-s-full rounded-e-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
