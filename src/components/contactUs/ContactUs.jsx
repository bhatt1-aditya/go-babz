import React from "react";
import contactUs from "../../../public/images/4.png";
function ContactUs() {
  return (
    <div>
      <div className="relative min-w-full flex flex-col justify-center items-center">
        <img
          src={contactUs}
          alt="image is missing"
          className="w-full relative"
        />
        <span className="absolute  inset-y-1/2  flex flex-col text-center justify-center items-center">
          <h1 className="text-5xl font-medium">Contact Us</h1>
          <p className="mt-2 ">Home / Contact Us</p>
        </span>
      </div>
    </div>
  );
}

export default ContactUs;
