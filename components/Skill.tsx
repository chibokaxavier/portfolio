import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://cdn.pixabay.com/photo/2023/03/17/16/55/man-7859085_640.jpg"
        className="h-24 w-24 md:w-28 md:h-28 rounded-full border border-gray-500  object-cover  xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="opacity-0 absolute group-hover:opacity-80  transition duration-300 group-hover:bg-white h-24 w-24 rounded-full z-0 xl:w-32 xl:h-32 md:w-28 md:h-28 ">
        <div className="h-full flex items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
