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
import { DiMaterializecss } from "react-icons/di";
import { FiFramer } from "react-icons/fi";
import { BsGit } from "react-icons/bs";

const page = () => {
  return (
    <div className="mt-32">
      <div className="text-4xl font-bold tracking-wide md:items-start md:justify-start md:mx-0 items-center mx-auto flex justify-center">
        Skills
      </div>
      {/* Skill Icons */}
      <div className="flex flex-row flex-wrap w-full mt-8 gap-10">
        <div className="bg-slate-200 p-6 rounded-md cursor-pointer">
          <AiFillHtml5 size={100} color={"yellow"} />
        </div>
        <div className="bg-slate-800 p-6 rounded-md cursor-pointer">
          <BiLogoCss3 size={100} color={"orange"} />
        </div>
        <div className="bg-slate-900 p-6 rounded-md cursor-pointer">
          <BiLogoJavascript size={100} color={"yellow"} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-blue-500 cursor-pointer">
          <BiLogoReact size={100} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-slate-900 cursor-pointer">
          <SiNextdotjs size={100} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-red-600 cursor-pointer">
          <SiSvelte size={100} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-blue-600 cursor-pointer">
          <BiLogoTypescript size={100} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-purple-500 cursor-pointer">
          <BiLogoRedux size={100} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-gray-800 cursor-pointer">
          <SiExpo size={100} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-slate-800 cursor-pointer">
          <SiReactrouter size={100} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-purple-800 cursor-pointer">
          <SiAxios size={100} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-orange-600 cursor-pointer">
          <SiPostman size={100} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-blue-400 cursor-pointer">
          <BiLogoTailwindCss size={100} />
        </div>
        <div className="bg-slate-500 p-6 rounded-md  text-gray-500 cursor-pointer">
          <SiStyledcomponents size={100} />
        </div>
        <div className="bg-slate-500 p-6 rounded-md text-purple-600 cursor-pointer">
          <BsFillBootstrapFill size={100} />
        </div>
        <div className="bg-slate-200 p-6 rounded-md text-blue-500 cursor-pointer">
          <DiMaterializecss size={100} />
        </div>
        <div className="bg-slate-300 p-6 rounded-md text-blue-600 cursor-pointer">
          <FiFramer size={100} />
        </div>
        <div className="bg-slate-400 p-6 rounded-md  cursor-pointer">
          <BiLogoFigma size={100} />
        </div>
        <div className="bg-slate-600 p-6 rounded-md text-orange-700 cursor-pointer">
          <BsGit size={100} />
        </div>
        <div className="bg-slate-700 p-6 rounded-md text-gray-900 cursor-pointer">
          <AiFillGithub size={100} />
        </div>
      </div>
    </div>
  );
};

export default page;
