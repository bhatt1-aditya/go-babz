import React from "react";
import { GrMap } from "react-icons/gr";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GiRotaryPhone } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { BsEnvelopeAt } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
function Connect() {
  return (
    <div>
      <div className="xl:mx-20 mb-10 ">
        <div className="max-h-screen flex flex-col justify-center items-center text-center ">
          <h1 className="my-10 lg:text-5xl text-4xl font-medium ">
            Stay Connected
          </h1>
          <p className="mb-10 lg:text-xl md:text-base sm:text-sm text-xs text-slate-600">
            We'd Love Hear From You!Whether You're Looking To Book An
            Appointment Or
            <br />
            Have Questions About Our Services,Feel Free To Reach Out To Us.
          </p>
        </div>
        <div className="w-full flex xl:flex-row flex-col justify-center  bg-yellow-100 text-white">
          <div className="xl:w-6/12 bg-yellow-500 relative ">
            <div className="flex flex-col gap-10 md:py-40 lg:py-20 py-20">
              <div className="flex flex-row justify-between items-center  w-full">
                <div className="sm:w-4/12 w-3/12 flex justify-center items-end">
                  <GrMap className="sm:text-7xl text-5xl" />
                </div>
                <div className="flex flex-col flex-start sm:w-8/12 w-9/12">
                  <h1 className="text-3xl font-semibold">Address</h1>
                  <p className="sm:text-xl text-base text-slate-100 ">
                    {" "}
                    Gpo, Plot No 298, Unit-6, Biju Pattanik <br />
                    International Airport- Aerodrome,
                    <br />
                    Ekamra Rd,Ganga Nagar, <br /> Bhubaneswar, Odisha 751020
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-between items-center  w-full">
                <div className="sm:w-4/12 w-3/12 flex justify-center items-end">
                  <SlEnvolopeLetter className="sm:text-7xl text-5xl" />
                </div>
                <div className="flex flex-col flex-start sm:w-8/12 w-9/12">
                  <h1 className="text-3xl font-semibold">Email</h1>
                  <p className="sm:text-xl text-base text-slate-100 ">
                    Info@Gmail.Com
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-between items-center  w-full mt-8">
                <div className="sm:w-4/12 w-3/12 flex justify-center items-end">
                  <GiRotaryPhone className="sm:text-7xl text-5xl" />
                </div>
                <div className="flex flex-col flex-start sm:w-8/12 w-9/12">
                  <h1 className="text-3xl font-semibold">Phone</h1>
                  <p className="sm:text-xl text-base text-slate-100 ">
                    +91 824 968 6752
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-6/12">
            <h1 className="text-black mx-14  my-16 text-4xl font-semibold">
              Get In Touch
            </h1>
            <li className="text-black mx-14 border border-gray-400 bg-yellow-50 my-8 text-2xl font-medium list-none flex justify-start items-center">
              <FaUser className="h-5 w-5 ml-3 text-gray-700" />
              <input
                type="text"
                placeholder="Name"
                className="outline-none p-4  w-full"
              />
            </li>

            <li className="text-black mx-14 border border-gray-400 bg-yellow-50 my-8 text-2xl font-medium list-none flex justify-start items-center">
              <BsEnvelopeAt className="h-5 w-5 ml-3 text-gray-700" />
              <input
                type="text"
                placeholder="Email"
                className="outline-none p-4 w-full"
              />
            </li>

            <li className="text-black mx-14 border border-gray-400 bg-yellow-50 my-8 text-2xl font-medium list-none flex justify-start items-center">
              <FaPhoneVolume className="h-5 w-5 ml-3 text-gray-700" />
              <input
                type="text"
                placeholder="Phone"
                className="outline-none p-4  w-full"
              />
            </li>

            <li className="text-black mx-14 border border-gray-400 bg-yellow-50 my-8 text-2xl font-medium list-none flex justify-start items-center">
              <AiFillMessage className="h-5 w-5 ml-3 text-gray-700" />
              <input
                type="text"
                placeholder="Message"
                className="outline-none p-4  w-full"
              />
            </li>
            <button className="text-white mx-14 border-2 border-gray-400 mb-10 py-4 px-16 rounded bg-yellow-400 border-none text-xl font-semibold ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
