import React from "react";
import { BiLogoJavascript, BiLogoCss3, BiLogoReact } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNextdotjs, SiSvelte } from "react-icons/si";

const page = () => {
  return (
    <div className="mt-32">
      <div className="text-4xl font-bold tracking-wide md:items-start md:justify-start md:mx-0 items-center mx-auto flex justify-center">
        Skills
      </div>
      {/* Skill Icons */}
      <div className="flex flex-row flex-wrap w-full mt-8">
        <div className="rounded-lg border-[1px] border-slate-500 bg-black">
          <BiLogoJavascript size={100} color={"yellow"} />
        </div>
        <div className="rounded-lg border-[1px] border-slate-500 bg-black ">
          <AiFillHtml5 size={100} color={"orange"} />
        </div>
        <div className="rounded-lg border-[1px] border-slate-500 bg-black">
          <BiLogoCss3 size={100} color={"blue"} />
        </div>
        <div className="rounded-lg border-[1px] border-slate-500 bg-black text-blue-500">
          <BiLogoReact size={100} />
        </div>
        <div className="rounded-lg border-[1px] border-slate-500 bg-black text-slate-900">
          <SiNextdotjs size={100} />
        </div>
        <div className="rounded-lg border-[1px] border-slate-500 bg-black text-red-600">
          <SiSvelte size={100} />
        </div>
      </div>
    </div>
  );
};

export default page;
