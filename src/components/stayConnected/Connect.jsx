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
      <div className="mx-10 mb-10 ">
        <div className=" flex flex-col justify-center items-center text-center ">
          <h1 className="my-10 text-5xl font-medium drop-shadow-2xl">
            Stay Connected
          </h1>
          <p className="mb-10">
            We'd Love Hear From You!Whether You're Looking To Book An
            Appointment Or
            <br />
            Have Questions About Our Services,Feel Free To Reach Out To Us.
          </p>
        </div>
        <div className="w-full flex justify-start  bg-yellow-100 text-white">
          <div className="w-5/12 bg-yellow-500 rounded-s-lg">
            <li className="flex justify-evenly items-center gap-8 my-14 ">
              <GrMap className="h-20 w-20" />
              <div>
                <h1 className="font-semibold text-lg">Address</h1>
                <p className="text-sm font-thin">
                  Gpo, Plot No 298,Unit-6,Biju Patnaik
                  <br />
                  International Airport-Aerodrome,
                  <br />
                  Ekamra Rd,Ganga Nagar,
                  <br />
                  Bhubaneswar,Odisha 751020
                </p>
              </div>
            </li>

            <li className="flex justify-evenly items-center gap-8 my-14">
              <SlEnvolopeLetter className="h-20 w-20" />
              <div>
                <h1 className="font-semibold text-lg">Email</h1>
                <p className="text-sm font-thin">
                  {" "}
                  Gpo, Plot No 298,Unit-6,Biju Patnaik
                  <br />
                  International Airport-Aerodrome,
                  <br />
                  Ekamra Rd,Ganga Nagar,
                  <br />
                  Bhubaneswar,Odisha 751020
                </p>
              </div>
            </li>

            <li className="flex justify-evenly items-center gap-8 my-14">
              <GiRotaryPhone className="h-20 w-20" />
              <div>
                <h1 className="font-semibold text-lg">Phone</h1>
                <p className="text-sm font-thin flex flex-col justify-start">
                  {" "}
                  Gpo, Plot No 298,Unit-6,Biju Patnaik
                  <br />
                  International Airport-Aerodrome,
                  <br />
                  Ekamra Rd,Ganga Nagar,
                  <br />
                  Bhubaneswar,Odisha 751020
                </p>
              </div>
            </li>
          </div>
          <div className="w-7/12">
            <h1 className="text-black mx-7  my-8 text-2xl font-medium">
              Get In Touch
            </h1>
            <li className="text-black mx-7 border border-black bg-yellow-50 my-8 text-2xl font-medium list-none flex justify-start items-center">
              <FaUser className="h-5 w-5 ml-3 " />
              <input
                type="text"
                placeholder="Name"
                className="outline-none p-3"
              />
            </li>

            <li className="text-black mx-7 border border-black bg-yellow-50 my-8 text-2xl font-medium list-none flex justify-start items-center">
              <BsEnvelopeAt className="h-5 w-5 ml-3 " />
              <input
                type="text"
                placeholder="Email"
                className="outline-none p-3"
              />
            </li>

            <li className="text-black mx-7 border border-black bg-yellow-50 my-8 text-2xl font-medium list-none flex justify-start items-center">
              <FaPhoneVolume className="h-5 w-5 ml-3 " />
              <input
                type="text"
                placeholder="Phone"
                className="outline-none p-3"
              />
            </li>

            <li className="text-black mx-7 border border-black bg-yellow-50 my-8 text-2xl font-medium list-none flex justify-start items-center">
              <AiFillMessage className="h-5 w-5 ml-3 " />
              <input
                type="text"
                placeholder="Message"
                className="outline-none p-3"
              />
            </li>
            <button className="text-white mx-7 border-2 border-black py-2 px-7 rounded bg-yellow-400 border-none font-semibold">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
