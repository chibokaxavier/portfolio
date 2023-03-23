import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-start sticky p-5 mx-auto max-w-7xl justify-between z-20 xl;items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex  items-center flex-row"
      >
        <SocialIcon
          url="https://www.instagram.com/manlikexavy/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/manlikexavy"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://wa.me/+2348121826916"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
      className="flex flex-row  items-center cursor-pointer text-gray-300">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden  md:inline-flex text-gray-400 text-[14px]">
          Get In touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
