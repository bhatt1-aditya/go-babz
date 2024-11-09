import React from "react";
import logo from "../../../public/images/2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { FaOpera } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GiRotaryPhone } from "react-icons/gi";
function Footer() {
  return (
    <div className="sm:mx-20 mx-5">
      <div className="flex lg:flex-row flex-col justify-between my-20">
        <div className="flex flex-col gap-6 list-none font-semibold text-yellow-400 lg:mt-28 ">
          <h3 className="text-green-900 xl:text-2xl text-xl">QUICK LINKS</h3>
          <li className="xl:text-xl text-base">Home</li>
          <li className="xl:text-xl text-base">About Us</li>
          <li className="xl:text-xl text-base">Tour</li>
          <li className="xl:text-xl text-base">Gallery</li>
          <li className="xl:text-xl text-base">Contact Us</li>
        </div>
        <div className="flex flex-col justify-start items-center text-center">
          <img
            src={logo}
            className="lg:h-64 lg:w-64 h-60 w-60 object-scale-down"
          />
          <p className="mb-5 text-yellow-500 xl:text-xl sm:text-base text-xs">
            At Go Cabz We're Passionate About Crafting Memorable Travel
            <br />
            Experience Tailored To Your Interests. From Adventurous Treks
            <br />
            To Serene Getaways. We're Here To Help You Explore The World
            <br />
            With Ease And Excitement.
          </p>
          <ul className="flex justify-center items-center gap-4 text-green-800 font-bold text-3xl">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <SiYoutube />
            </li>
            <li>
              <FaOpera />
            </li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-green-800 font-bold text-semibold mb-1 xl:text-2xl text-xl lg:mt-28 mt-10">
                CONTACT US
              </h1>
            </div>
            <div className="flex flex-row lg:justify-between justify-start items-center gap-10 w-full">
              <div className=" flex justify-center items-end ">
                <GrMap className="text-3xl font-bold text-green-800" />
              </div>
              <div className="flex flex-col flex-start ">
                <p className="text-yellow-500 xl:text-xl text-base">
                  {" "}
                  Gpo, Plot No 298, Unit-6, Biju <br /> Pattanik International
                  Airport- <br />
                  Aerodrome, Ekamra Rd,Ganga <br /> Nagar,Bhubaneswar, Odisha
                  <br />
                  751020
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-10 w-full">
              <div className=" ">
                <SlEnvolopeLetter className=" text-3xl font-bold text-green-800" />
              </div>
              <div className="flex flex-col flex-start items-center gap-10 ">
                <p className="text-yellow-500 xl:text-xl text-base ">
                  Info@Gmail.Com
                  <br />
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-10 w-full ">
              <div className=" flex justify-center items-end">
                <GiRotaryPhone className="text-3xl font-bold text-green-800" />
              </div>
              <div className="flex flex-col flex-start">
                <p className=" text-yellow-500 xl:text-xl text-base">
                  +91 824 968 6752
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
