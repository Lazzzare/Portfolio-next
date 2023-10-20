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
      <div className="flex flex-row w-full mt-8 gap-10">
        <div className=" bg-black cursor-pointer">
          <AiFillHtml5 size={150} color={"yellow"} />
        </div>
        <div className="  bg-black cursor-pointer">
          <BiLogoCss3 size={150} color={"orange"} />
        </div>
        <div className="  bg-black cursor-pointer">
          <BiLogoJavascript size={150} color={"blue"} />
        </div>
        <div className="  bg-black text-blue-500 cursor-pointer">
          <BiLogoReact size={150} />
        </div>
        <div className=" bg-black text-slate-900 cursor-pointer">
          <SiNextdotjs size={150} />
        </div>
        <div className="  bg-black text-red-600 cursor-pointer">
          <SiSvelte size={150} />
        </div>
        <div className="  bg-black text-blue-600 cursor-pointer">
          <BiLogoTypescript size={150} />
        </div>
        <div className="  bg-black text-purple-500 cursor-pointer">
          <BiLogoRedux size={150} />
        </div>
        <div className="  bg-black text-gray-800 cursor-pointer">
          <SiExpo size={150} />
        </div>
        <div className="  bg-black text-slate-800 cursor-pointer">
          <SiReactrouter size={150} />
        </div>
        <div className=" bg-black text-purple-800 cursor-pointer">
          <SiAxios size={150} />
        </div>
        <div className="  bg-black text-orange-600 cursor-pointer">
          <SiPostman size={150} />
        </div>
        <div className="  bg-black text-blue-400 cursor-pointer">
          <BiLogoTailwindCss size={150} />
        </div>
        <div className="  bg-black text-gray-500 cursor-pointer">
          <SiStyledcomponents size={150} />
        </div>
        <div className=" bg-black text-purple-600 cursor-pointer">
          <BsFillBootstrapFill size={150} />
        </div>
        <div className="  bg-black text-blue-500 cursor-pointer">
          <DiMaterializecss size={150} />
        </div>
        <div className="  bg-black text-blue-600 cursor-pointer">
          <FiFramer size={150} />
        </div>
        <div className="  bg-black  cursor-pointer">
          <BiLogoFigma size={150} />
        </div>
        <div className="  bg-black text-orange-700 cursor-pointer">
          <BsGit size={150} />
        </div>
        <div className="  bg-black text-gray-900 cursor-pointer">
          <AiFillGithub size={150} />
        </div>
      </div>
    </div>
  );
};

export default page;
