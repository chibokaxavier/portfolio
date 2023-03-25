import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left px-10 md:flex-row max-w-7xl justify-evenly items-center mx-auto">
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
            <p className="font-semibold text-xl md:text-4xl">+2348121826916</p>
          </div>
          <div className="flex items-center space-x-5 justify-center  ">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]  " />
            <p className="font-semibold text-xl md:text-4xl">
              chibokaxavier@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center  ">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#f7ab0a]  " />
            <p className="font-semibold text-xl md:text-4xl">Lagos,Nigeria</p>
          </div>
        </div>
        <div className="w-full">
          <form className=" w-[95%] flex flex-col space-y-2 mx-auto">
            <div className="flex space-x-2">
              <input className="contactInput w-[50%]" placeholder="Name"  type="text" />
              <input className="contactInput w-[50%]"  placeholder="Email"  type="text" />
            </div>
            <input className="contactInput" type="text" placeholder="Subject"  />
            <textarea className="contactInput"  placeholder="Message" />
            <button className="bg-[#f7ab0a] py-3 px-2 rounded-md font-bold text-black text-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
