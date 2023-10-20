import React from "react";
import { BiLogoJavascript } from "react-icons/bi";

const page = () => {
  return (
    <div className="mt-32">
      <div className="text-4xl font-bold tracking-wide md:items-start md:justify-start md:mx-0 items-center mx-auto flex justify-center">
        Skills
      </div>
      {/* Skill Icons */}
      <div className="flex flex-row flex-wrap w-full mt-8">
        <div className="rounded-lg border-1 border-slate-500 bg-black">
          <BiLogoJavascript size={100} color={"yellow"} />
        </div>
        <div className="rounded-lg border-1 border-slate-500">
          <BiLogoJavascript size={100} />
        </div>
        <div className="rounded-lg border-1 border-slate-500">
          <BiLogoJavascript size={100} />
        </div>
        <div className="rounded-lg border-1 border-slate-500">
          <BiLogoJavascript size={100} />
        </div>
        <div className="rounded-lg border-1 border-slate-500">
          <BiLogoJavascript size={100} />
        </div>
        <div className="rounded-lg border-1 border-slate-500">
          <BiLogoJavascript size={100} />
        </div>
      </div>
    </div>
  );
};

export default page;
