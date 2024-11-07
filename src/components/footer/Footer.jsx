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
    <div className="mx-10">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-6 list-none font-semibold text-yellow-400">
          <h3 className="text-green-900 ">QUICK LINKS</h3>
          <li>Home</li>
          <li>About Us</li>
          <li>Tour</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </div>
        <div className="flex flex-col justify-start items-center text-center">
          <img src={logo} className="h-32 w-32" />
          <p className="mb-5 text-yellow-500">
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
          <h1 className="text-green-800 font-bold text-semibold mb-4">
            CONTACT US
          </h1>
          <ul>
            <li className="flex gap-8 justify-center items-center py-4">
              <FaLocationDot className=" text-green-800 text-2xl" />
              <p className="text-yellow-500">
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

            <li className="flex gap-8 justify-center items-center py-4">
              <TfiEmail className=" text-green-800 text-2xl" />
              <p className="text-yellow-500">
                Gpo, Plot No 298, Unit-6, Biju
                <br />
                Pattanik International Airport-
              </p>
            </li>

            <li className="flex gap-8 justify-center items-center py-4">
              <FaPhoneAlt className=" text-green-800 text-2xl" />
              <p className="text-yellow-500">
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
