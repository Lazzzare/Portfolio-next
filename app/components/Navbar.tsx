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
  // const menuArray = ["home", "skills", "project", "contact"];
  const menuArray = [
    {
      id: 1,
      title: "menu",
      link: <Link href="/app/page.tsx"></Link>,
    },
    {
      id: 2,
      title: "skills",
      link: <Link href="/app/skills"></Link>,
    },
    {
      id: 3,
      title: "projects",
      link: <Link href="/app/projects"></Link>,
    },
    {
      id: 4,
      title: "contact",
      link: <Link href="/app/contact"></Link>,
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
            <div className="flex md:hidden cursor-pointer">
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
          {/* RightSide */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="hidden md:flex items-center gap-x-5">
              {menuArray.map((item, index) => (
                <li key={index} className="list-none">
                  <h3 key={index} className="cursor-pointer">
                  {item.title}
                  </h3>
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
