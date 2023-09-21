"use client";
import Image from "next/image";
import ProfileImage from "@/public/profile.jpg";
import "../../app/globals.css";
import {
  BsFillPatchCheckFill,
  BsFillMoonStarsFill,
  BsSun,
} from "react-icons/bs";
import { useTheme } from "next-themes";

const Navbar = () => {
  const menuArray = ["home", "skills", "project", "contact"];
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex flex-row justify-between text-black dark:text-white">
      {/* LeftSide */}
      <div className="flex items-center gap-x-2">
        <Image
          src={ProfileImage}
          alt="ProfileImage"
          className="w-[48px] h-[48px] rounded-full object-cover mr-2"
        />
        <h2 className="font-medium text-lg cursor-pointer">Lazzzare</h2>
        <BsFillPatchCheckFill className="text-blue-500 w-6 h-6" />
      </div>

      {/* RightSide */}
      <div className="flex items-center gap-x-5">
        {menuArray.map((item, index) => (
          <li key={index} className="list-none">
            <h3 key={index} className="cursor-pointer">
              {item}
            </h3>
          </li>
        ))}
        {theme === "light" ? (
          <BsFillMoonStarsFill
            onClick={() => setTheme("dark")}
            size={20}
            className="ml-3 cursor-pointer"
          />
        ) : (
          <BsSun
            onClick={() => setTheme("light")}
            size={20}
            className="ml-3 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
