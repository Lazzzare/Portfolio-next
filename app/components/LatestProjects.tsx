import React from "react";
import Image from "next/image";
// import TodoProjectImage from "@/public/todo.png";
import TodoProjectImage from "@/app/components/images/todo.png";
import { motion } from "framer-motion";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoTailwindCss,
} from "react-icons/bi";

const LatestProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 3, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-32">
        <div className="text-4xl font-bold tracking-wide">Latest Projects</div>
        {/*  */}
        <div className="mt-4">
          {/* Projects */}
          <div>
            {/* Project 1 */}
            <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer">
              <Image
                className="rounded-xl h-[300px] w-[300px] object-cover"
                src={TodoProjectImage}
                alt="image"
                // width={264}
                // height={800}
              />
              <div className="absolute bottom-24 left-[70px]">
                <h1 className="text-bold text-3xl cursor-pointer hover:text-red-300">
                  Todo App
                </h1>
              </div>
              {/* Icons */}
              <div className="absolute flex bottom-3 left-[90px]">
                <BiLogoReact size={40} className="text-blue-500" />
                <BiLogoTypescript size={40} className="text-blue-700" />
                <BiLogoTailwindCss size={40} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LatestProjects;
