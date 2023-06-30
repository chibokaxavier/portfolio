import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left  md:flex-row max-w-7xl justify-evenly items-center mx-auto px-10">
      <h2 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500 md:pl-0 pl-4">
        About
      </h2>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src="./images/xavy.jpg"
        className="-mb-20 md:mb-0 mt-[70px] md:mt-0   flex-shrink-0 w-[170px] h-[170px] rounded-full object-cover md:rounded-lg md:h-96 md:w-64 xl:w-[400px] xl:h-[450px]"
      />
      <div className="space-y-4 px-0 md:px-10  mt-[10px]">
        <h4 className=" text-2xl md:text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[orange]">little</span>{" "}
          Background
        </h4>
        <p className="text-base">
          {" "}
          I am a passionate performance-driven Frontend Developer who has
          knowledge on HTML CSS, Javascript and Typescript. My personal
          strengths Includes resilience,problem-solving,and the ability to work
          under pressure. I welcome positively impactful opportunities where I
          can explore technology and business in a progress-oriented
          organization that welcomes and nurtures talent.I have an excellent
          reputation for my integrity, productivity and leadership ability.
        </p>
      </div>
    </div>
  );
};

export default About;
