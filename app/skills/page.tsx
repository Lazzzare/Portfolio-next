"use client";
import React from "react";
import {
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoFigma,
} from "react-icons/bi";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiNextdotjs,
  SiSvelte,
  SiStyledcomponents,
  SiAxios,
  SiReactrouter,
  SiExpo,
  SiPostman,
} from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiMaterializecss, DiSass } from "react-icons/di";
import { FiFramer } from "react-icons/fi";
import { BsGit } from "react-icons/bs";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="mt-32">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 3, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-4xl font-bold tracking-wide md:items-start md:justify-start md:mx-0 items-center mx-auto flex justify-center">
          Skills
        </div>
      </motion.div>
      {/* Skill Icons */}
      <div className="flex flex-row flex-wrap w-full mt-8 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-row justify-between">
            <div className="bg-slate-900 p-6 rounded-md cursor-pointer text-orange-600 flex flex-col gap-2 items-center text-center">
              <AiFillHtml5 size={100} />
              <h1>HTML</h1>
            </div>
            <div className="bg-slate-900 p-6 rounded-md cursor-pointer text-blue-400 flex flex-col gap-2 items-center text-center">
              <BiLogoCss3 size={100} />
              <h1>CSS</h1>
            </div>
            <div className="bg-slate-900 p-6 rounded-md cursor-pointer text-yellow-400 flex flex-col gap-2 items-center text-center">
              <BiLogoJavascript size={100} />
              <h1>Javascript</h1>
            </div>
            <div className="bg-slate-900 p-6 rounded-md text-blue-500 cursor-pointer flex flex-col gap-2 items-center text-center">
              <BiLogoReact size={100} />
              <h1>React</h1>
            </div>
            <div className="bg-slate-900 p-6 rounded-md text-white cursor-pointer flex flex-col gap-2 items-center text-center">
              <SiNextdotjs size={100} />
              <h1>Next</h1>
            </div>
            <div className="bg-slate-900 p-6 rounded-md text-red-600 cursor-pointer flex flex-col gap-2 items-center text-center">
              <SiSvelte size={100} />
              <h1>Svelte</h1>
            </div>
            <div className="bg-slate-900 p-6 rounded-md text-blue-600 cursor-pointer flex flex-col gap-2 items-center text-center">
              <BiLogoTypescript size={100} />
              <h1>Typescript</h1>
            </div>
          </div>
        </motion.div>
        <div className="bg-slate-900 p-6 rounded-md text-purple-500 cursor-pointer flex flex-col gap-2 items-center text-center">
          <BiLogoRedux size={100} />
          <h1>Redux</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-blue-300 cursor-pointer flex flex-col gap-2 items-center text-center">
          <SiExpo size={100} />
          <h1>Expo</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-red-400 cursor-pointer flex flex-col gap-2 items-center text-center">
          <SiReactrouter size={100} />
          <h1>React-Router</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-purple-800 cursor-pointer flex flex-col gap-2 items-center text-center">
          <SiAxios size={100} />
          <h1>Axios</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-orange-600 cursor-pointer flex flex-col gap-2 items-center text-center">
          <SiPostman size={100} />
          <h1>Postman</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-pink-500 cursor-pointer flex flex-col gap-2 items-center text-center">
          <DiSass size={100} />
          <h1>Sass</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-blue-400 cursor-pointer flex flex-col gap-2 items-center text-center">
          <BiLogoTailwindCss size={100} />
          <h1>Tailwind</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-purple-400  cursor-pointer flex flex-col gap-2 items-center text-center">
          <SiStyledcomponents size={100} />
          <h1>Styled</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-purple-600 cursor-pointer flex flex-col gap-2 items-center text-center">
          <BsFillBootstrapFill size={100} />
          <h1>Bootstrap</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-blue-500 cursor-pointer flex flex-col gap-2 items-center text-center">
          <DiMaterializecss size={100} />
          <h1>MaterialUI</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-blue-600  cursor-pointer flex flex-col gap-2 items-center text-center">
          <FiFramer size={100} />
          <h1>Framer</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-pink-400  cursor-pointer flex flex-col gap-2 items-center text-center">
          <BiLogoFigma size={100} />
          <h1>Figma</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-orange-700 cursor-pointer flex flex-col gap-2 items-center text-center">
          <BsGit size={100} />
          <h1>Git</h1>
        </div>
        <div className="bg-slate-900 p-6 rounded-md text-blue-800 cursor-pointer flex flex-col gap-2 items-center text-center">
          <AiFillGithub size={100} />
          <h1>Github</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
