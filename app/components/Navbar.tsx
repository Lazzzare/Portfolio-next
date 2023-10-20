"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImage from "@/public/profile.jpg";
import "../../app/globals.css";
import { BsFillPatchCheckFill, BsFillMoonFill, BsSun } from "react-icons/bs";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<number>(0);
  const menuArray = [
    {
      id: 1,
      title: "home",
      link: "/",
    },
    {
      id: 2,
      title: "skills",
      link: "skills",
    },
    {
      id: 3,
      title: "projects",
      link: "projects",
    },
    {
      id: 4,
      title: "contact",
      link: "contact",
    },
  ];
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center text-black dark:text-white">
        {/* LeftSide */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-x-2">
            <Image
              src={ProfileImage}
              alt="ProfileImage"
              className="w-[35px] h-[35px] md:w-[48px] md:h-[48px] rounded-full object-cover mr-1 md:mr-2"
            />
            <h2 className="font-medium text-base md:text-lg cursor-pointer">
              Lazzzare
            </h2>
            <BsFillPatchCheckFill className="text-blue-500 w-4 h-4 md:w-6 md:h-6" />
          </div>
        </motion.div>

        {/* BurgerMenu */}
        <div className="flex flex-row-reverse md:flex-row items-center gap-x-4">
          {mobileMenu ? (
            <div className="flex md:hidden cursor-pointer z-50">
              <HiXMark onClick={() => setMobileMenu(!mobileMenu)} size={25} />
            </div>
          ) : (
            <div className="flex md:hidden cursor-pointer">
              <HiOutlineMenuAlt1
                onClick={() => setMobileMenu(!mobileMenu)}
                size={25}
              />
            </div>
          )}
          {mobileMenu ? (
            <div className="absolute left-0 right-0 top-0 w-full h-screen flex flex-col items-center mx-auto justify-center bg-[#111827] z-10 text-orange-400 hover:text-orange-500">
              <ul className="flex flex-col items-center mx-auto justify-center">
                {menuArray.map((menuItem) => {
                  return (
                    <Link key={menuItem.id} href={menuItem.link}>
                      <li
                        className="text-4xl tracking-wide font-bold
                      "
                      >
                        {menuItem.title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          ) : null}
          {/* RightSide */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="hidden md:flex items-center gap-x-5">
              {menuArray.map((item, index) => (
                <li
                  key={index}
                  className={`list-none hover:text-red-400 ${
                    activeMenu === index ? "text-red-400 " : null
                  }`}
                  onClick={() => setActiveMenu(index)}
                >
                  <Link href={item.link}>
                    <h3 key={index} className="cursor-pointer">
                      {item.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </div>
            {theme === "light" ? (
              <BsFillMoonFill
                onClick={() => setTheme("dark")}
                size={20}
                className="ml-4 cursor-pointer"
              />
            ) : (
              <BsSun
                onClick={() => setTheme("light")}
                size={20}
                className="ml-4 cursor-pointer"
              />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
