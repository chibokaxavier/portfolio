import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left  md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="tracking-[20px] text-2xl text-gray-500 absolute top-24 uppercase  ">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x  snap-mandatory z-20 pt-10">
        {" "}
        {projects.map((project, i) => (
          <div key={i} className="w-screen  flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44  h-screen">
            <motion.img
              initial={{
                y:-300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 1.5 }}
              viewport={{once:true}}
              className=" h-[150px] w-[150px]"
              src="https://cdn.pixabay.com/photo/2023/03/04/15/53/duck-7829778_640.jpg"
              alt=""
            />

            <div className="px-0 md:px-10  max-w-6xl space-y-4 lg:space-y-10  ">
              <h4 className=" text-2xl md:text-4xl font-semibold text-center ">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                Chicken Bird
              </h4>
              <p className="text-base text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus, aspernatur eum. Aliquid, magni harum id dolore
                accusantium consequuntur non esse totam tempore, officiis
                delectus expedita repellat quia animi nesciunt in! Lorem ipsum
                dolor, sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[300px] left-0 -skew-y-12 absolute top-[30%] w-full bg-gray-400" />
    </motion.div>
  );
};

export default Projects;
