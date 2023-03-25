import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left  md:flex-row max-w-7xl justify-evenly items-center mx-auto px-[100px]">
      <h2 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
        contact
      </h2>

      <div className="flex flex-col space-y-6 mt-[100px]">
        <h4 className="font-semibold text-center text-2xl md:text-4xl  ">
          I have got just what you need.{" "}
          <span className=" underline decoration-[#f7ab0a]">Lets Talk</span>
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center  ">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]  " />
            <p className="font-semibold text-2xl">+2348121826916</p>
          </div>
          <div className="flex items-center space-x-5 justify-center  ">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]  " />
            <p className="font-semibold text-2xl">chibokaxavier@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center  ">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]  " />
            <p className="font-semibold text-2xl">Lagos,Nigeria</p>
          </div>
        </div>

        <form className="w-fit flex flex-col space-y-2 mx-auto ">
          <div className="flex space-x-2">
            <input className="contactInput" type="text" />
            <input className="contactInput" type="text" />
          </div>
          <input className="contactInput" type="text" />
          <textarea className="contactInput" />
          <button className="bg-[#f7ab0a] py-5 px-10 rounded-md font-bold text-black text-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
