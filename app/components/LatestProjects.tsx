"use client";
import React from "react";
import Image from "next/image";
import TodoProjectImage from "../images/TodoProjectImage.png";
import TicTacToe from "../images/TicTacToe.jpg";
import PasswordGenerator from "../images/PasswordGenerator.png";
import TodoAppSvelte from "../images/TodoAppSvelte.png";
import GithubProject from "../images/Github.png";
import TipCalculatorProject from "../images/TipCalculator.png";
import { motion } from "framer-motion";
import { FiFramer } from "react-icons/fi";
import { SiSvelte } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { useTheme } from "next-themes";

const LatestProjects = () => {
  const { theme, setTheme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 3, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-32">
        <div className="text-4xl font-bold tracking-wide">Latest Projects</div>
        {/*  */}
        <div className="mt-8">
          {/* Projects */}
          <div className="flex flex-col gap-8 md:flex-row justify-between">
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
                <h1
                  className={`text-bold text-3xl cursor-pointer hover:text-red-300 text-white`}
                >
                  Todo App
                </h1>
              </div>
              {/* Icons */}
              <div className="absolute flex bottom-3 left-[70px]">
                <BiLogoReact size={40} className="text-blue-500" />
                <BiLogoTypescript size={40} className="text-blue-700" />
                <BiLogoTailwindCss size={40} className="text-blue-400" />
                <FiFramer size={40} className="text-white" />
              </div>
            </div>
            {/* Project 2 */}
            <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer">
              <Image
                className="rounded-xl h-[300px] w-[300px] object-cover"
                src={TicTacToe}
                alt="image"
                // width={264}
                // height={800}
              />
              <div className="absolute top-6 left-[70px]">
                <h1 className="text-bold text-3xl cursor-pointer hover:text-red-300 text-white">
                  Tic Tac Toe
                </h1>
              </div>
              {/* Icons */}
              <div className="absolute flex bottom-3 left-[90px]">
                <BiLogoReact size={40} className="text-blue-500" />
                <BiLogoTypescript size={40} className="text-blue-700" />
                <BiLogoTailwindCss size={40} className="text-blue-400" />
              </div>
            </div>
            {/* Project 3 */}
            <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer">
              <Image
                className="rounded-xl h-[300px] w-[300px] object-cover"
                src={PasswordGenerator}
                alt="image"
                // width={264}
                // height={800}
              />
              <div className="absolute top-6 left-[30px]">
                <h1 className="text-bold text-2xl w-full text-center items-center mx-auto cursor-pointer hover:text-red-300 text-white">
                  Password Generator
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
          {/* Below Projects */}
          <div className="mt-8 flex flex-col gap-8 md:flex-row justify-between">
            {/* Project 4 */}
            <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer">
              <Image
                className="rounded-xl h-[300px] w-[300px] object-cover"
                src={TodoAppSvelte}
                alt="image"
                // width={264}
                // height={800}
              />
              <div className="absolute top-6 left-[70px]">
                <h1
                  className={`text-bold text-3xl cursor-pointer hover:text-red-300 ${
                    theme === "light" ? "text-black" : "text-black"
                  }`}
                >
                  Todo App
                </h1>
              </div>
              {/* Icons */}
              <div className="absolute flex bottom-3 left-[90px]">
                <SiSvelte size={40} className="text-orange-600" />
                <BiLogoTypescript size={40} className="text-blue-700" />
                <BiLogoTailwindCss size={35} className="text-blue-400" />
              </div>
            </div>
            {/* Project 5 */}
            <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer">
              <Image
                className="rounded-xl h-[300px] w-[300px] object-cover"
                src={GithubProject}
                alt="image"
                // width={264}
                // height={800}
              />
              <div className="absolute top-4 left-[40px]">
                <h1 className="text-bold text-3xl cursor-pointer hover:text-red-300 text-white">
                  Github User API
                </h1>
              </div>
              {/* Icons */}
              <div className="absolute flex bottom-3 left-[90px]">
                <BiLogoReact size={40} className="text-blue-500" />
                <BiLogoTypescript size={40} className="text-blue-700" />
                <BiLogoTailwindCss size={40} className="text-blue-400" />
              </div>
            </div>
            {/* Project 6 */}
            <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer">
              <Image
                className="rounded-xl h-[300px] w-[300px] object-cover"
                src={TipCalculatorProject}
                alt="image"
                // width={264}
                // height={800}
              />
              <div className="absolute top-6 left-[50px]">
                <h1
                  className={`text-bold text-3xl cursor-pointer hover:text-red-300 ${
                    theme === "light" ? "text-black" : "text-black"
                  }`}
                >
                  Tip Calculator
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
        {/* Button */}
        <div className="w-full flex gap-x-2 justify-end justify-items-end flex-row text-right mt-10 mb-20 font-bold text-3xl cursor-pointer items-center text-red-400 hover:text-red-300">
          <h2>See all projects </h2>
          <BsArrowRight className="" />
        </div>
      </div>
    </motion.div>
  );
};

export default LatestProjects;
