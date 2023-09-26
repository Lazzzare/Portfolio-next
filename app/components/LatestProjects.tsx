import React from "react";
import Image from "next/image";
import TodoProjectImage from "../../public/todo.png";
import { BiLogoReact } from "react-icons/bi";

const LatestProjects = () => {
  return (
    <div className="mt-32">
      <div className="text-4xl font-bold tracking-wide">Latest Projects</div>
      {/*  */}
      <div className="mt-4">
        {/* Project1 */}
        <div className="relative h-full w-full">
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
          <div className="absolute bottom-3 left-3">
            <BiLogoReact size={40} className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
