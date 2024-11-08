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
function Footer() {
  return (
    <div className="mx-40">
      <div className="flex justify-between my-20">
        <div className="flex flex-col gap-6 list-none font-semibold text-yellow-400 mt-28">
          <h3 className="text-green-900 text-2xl">QUICK LINKS</h3>
          <li className="text-xl">Home</li>
          <li className="text-xl">About Us</li>
          <li className="text-xl">Tour</li>
          <li className="text-xl">Gallery</li>
          <li className="text-xl">Contact Us</li>
        </div>
        <div className="flex flex-col justify-start items-center text-center">
          <img src={logo} className="h-64 w-64" />
          <p className="mb-5 text-yellow-500 text-xl">
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
          <h1 className="text-green-800 font-bold text-semibold mb-4 text-xl mt-28">
            CONTACT US
          </h1>
          <ul>
            <li className="flex gap-8 justify-center items-center pt-4 pb-2">
              <FaLocationDot className=" text-green-800 text-4xl" />
              <p className="text-yellow-500 text-xl">
                Gpo, Plot No 298, Unit-6, Biju
                <br />
                Pattanik International Airport-
                <br />
                Aerodrome,Ekamra Rd,Ganga
                <br />
                Nagar, Bhubaneswar, Odisha
                <br />
                751020
              </p>
            </li>

            <li className="flex gap-8 justify-center items-center py-2">
              <TfiEmail className=" text-green-800 text-4xl" />
              <p className="text-yellow-500 text-xl overflow-hidden">
                Gpo, Plot No 298, Unit-6, Biju
                <br />
                Pattanik International Airport-
              </p>
            </li>

            <li className="flex gap-8 justify-center items-center py-2">
              <FaPhoneAlt className=" text-green-800 text-4xl" />
              <p className="text-yellow-500 text-xl overflow-hidden">
                Gpo, Plot No 298, Unit-6, Biju
                <br />
                Pattanik International Airport-
                <br />
                751020
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
