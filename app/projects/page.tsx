"use client";
import React from "react";
import Image from "next/image";
import TodoProjectImage from "../images/TodoProjectImage.png";
import TicTacToe from "../images/TicTacToe.jpg";
import PasswordGenerator from "../images/PasswordGenerator.png";
import TodoAppSvelte from "../images/TodoAppSvelte.png";
import GithubProject from "../images/Github.png";
import TipCalculatorProject from "../images/TipCalculator.png";
import FormImage from "../images/FormProject.png";
import HookFormImage from "../images/hook-form.svg";
import FaqAccordion from "../images/FaqAccordion.png";
import AdviceGeneratorSvelte from "../images/AdviceGeneratorSvelte.png";
import AdviceGeneratorReact from "../images/AdviceGeneratorReact.png";
import InteractiveRatingComponentSvelte from "../images/InteractiveRatingComponent.png";
import InteractiveRatingComponentReact from "../images/InteractiveRatingComponent.png";
import KanbanBoard from "../images/KanbanBoard.png";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { FiFramer } from "react-icons/fi";
import { IoLogoVercel } from "react-icons/io5";
import { SiSvelte, SiAxios } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoNetlify,
} from "react-icons/bi";
import { useTheme as useNextTheme } from "next-themes";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 3, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mt-32">
          <div className="text-4xl font-bold tracking-wide md:items-start md:justify-start md:mx-0 items-center mx-auto flex justify-center">
            Projects
          </div>
          {/*  */}
          <div className="mt-8">
            {/* Projects */}
            <div className="flex flex-col gap-8 md:gap-8 md:flex-row md:justify-between mx-auto justify-center items-center">
              {/* Project 1 */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={TodoProjectImage}
                  alt="TodoProjectImage"
                />
                <p
                  className={`absolute top-[140px] right-[20px] hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer text-slate-800 font-bold dark:font-normal dark:text-red-300 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300`}
                >
                  This is a simple yet powerful Todo App built using React,
                  Tailwind CSS, Framer-motion and TypeScript.
                </p>
                <div className="absolute bottom-[170px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://todo-app-react-lazzzare.vercel.app/"
                  >
                    <IoLogoVercel size={40} />
                    <h2>Vercel</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/TodoApp-React"
                  >
                    <AiFillGithub size={40} />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute bottom-24 left-[70px]">
                  <h1
                    className={`text-bold text-3xl cursor-pointer text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300`}
                  >
                    Todo App
                  </h1>
                </div>
                {/* Icons */}
                <div className="absolute flex bottom-3 left-[70px] opacity-100 group-hover:opacity-0 transition-opacity">
                  <BiLogoReact size={40} className="text-blue-500" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                  <FiFramer size={40} className="text-white" />
                </div>
              </div>
              {/* Project 2 */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={TicTacToe}
                  alt="image"
                />
                <p
                  className={`absolute top-[140px] right-[15px] text-slate-800 font-bold dark:font-normal dark:text-red-300 hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer  opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300`}
                >
                  Welcome to the Tic-Tac-Toe game, a project built with React,
                  TypeScript, React-router and Tailwind CSS.
                </p>
                <div className="absolute bottom-[170px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://tic-tac-toe-react-ivory.vercel.app/"
                  >
                    <IoLogoVercel size={40} />
                    <h2>Vercel</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/TicTacToe-React"
                  >
                    <AiFillGithub
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-6 left-[70px]">
                  <h1 className="text-bold text-3xl cursor-pointer text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    Tic Tac Toe
                  </h1>
                </div>
                {/* Icons */}
                <div className="absolute flex bottom-3 left-[90px] opacity-100 group-hover:opacity-0 transition-opacity">
                  <BiLogoReact size={40} className="text-blue-500" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                </div>
              </div>
              {/* Project 3 */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={PasswordGenerator}
                  alt="image"
                />
                <p className="absolute top-[140px] right-[20px] text-slate-800 font-bold dark:font-normal dark:text-red-300 hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  This project aims to provide a simple and customizable
                  password generation tool.
                </p>
                <div className="absolute bottom-[170px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://password-generator-app-react-pi.vercel.app/"
                  >
                    <IoLogoVercel
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Vercel</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/PasswordGeneratorApp-React"
                  >
                    <AiFillGithub
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-6 left-[30px]">
                  <h1 className="text-bold text-2xl w-full text-center items-center mx-auto cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300 hover:text-red-300 text-white">
                    Password Generator
                  </h1>
                </div>
                {/* Icons */}
                <div className="absolute flex bottom-3 left-[90px] group-hover:opacity-0 transition-opacity">
                  <BiLogoReact size={40} className="text-blue-500" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                </div>
              </div>
            </div>
            {/* Below Projects */}
            <div className="flex flex-col gap-8 md:gap-8 md:flex-row md:justify-between mx-auto justify-center items-center">
              {/* Project 4 */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={TodoAppSvelte}
                  alt="image"
                />
                <p className="absolute top-[140px] right-[20px] text-slate-800 font-bold dark:font-normal dark:text-red-300 hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  This Todo App is a simple and efficient task management
                  application built using Svelte, TypeScript, and Tailwind CSS.
                </p>
                <div className="absolute bottom-[170px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://todo-app-svelte-lazzzare.netlify.app/"
                  >
                    <BiLogoNetlify
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Netlify</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/TodoApp-Svelte"
                  >
                    <AiFillGithub
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-6 left-[90px]">
                  <h1
                    className={`text-2xl text-slate-700 font-bold w-full text-center items-center mx-auto cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300 hover:text-red-300`}
                  >
                    Todo App
                  </h1>
                </div>
                {/* Icons */}
                <div className="absolute flex bottom-3 left-[90px] group-hover:opacity-0 transition-opacity">
                  <SiSvelte size={40} className="text-orange-600" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={35} className="text-blue-400" />
                </div>
              </div>
              {/* Project 5 */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={GithubProject}
                  alt="image"
                />
                <p className="absolute top-[140px] right-[20px] text-slate-800 font-bold dark:font-normal dark:text-red-300 hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  The GitHub-User-API is a user-friendly web app for fetching
                  detailed information about a GitHub user based on their
                  username.
                </p>
                {/* HoverIconsLink */}
                <div className="absolute bottom-[170px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github-user-api-react.netlify.app/"
                  >
                    <BiLogoNetlify
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Netlify</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/GithubUserAPI-React"
                  >
                    <AiFillGithub
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-4 left-[40px]">
                  <h1 className="text-bold text-3xl cursor-pointer hover:text-red-300 text-white group-hover:opacity-0 transition-opacity">
                    Github User API
                  </h1>
                </div>
                {/* Icons */}
                <div className="absolute flex bottom-3 left-[90px] group-hover:opacity-0 transition-opacity">
                  <BiLogoReact size={40} className="text-blue-500" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                </div>
              </div>
              {/* Project 6 */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={TipCalculatorProject}
                  alt="image"
                />
                <p className="absolute top-[110px] right-[20px] font-bold dark:font-normal dark:text-red-300 hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer text-slate-800 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  Tip Calculator project is a web application built using React
                  and TypeScript, designed to assist users in calculating tips
                  for various services.
                </p>
                <div className="absolute bottom-[200px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://tip-calculator-reacttsx.netlify.app/"
                  >
                    <BiLogoNetlify
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Netlify</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/TipCalculator-React"
                  >
                    <AiFillGithub
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-6 left-[50px]">
                  <h1
                    className={`text-slate-700 font-bold text-3xl cursor-pointer hover:text-red-300 group-hover:opacity-0 transition-opacity
                  `}
                  >
                    Tip Calculator
                  </h1>
                </div>
                {/* Icons */}
                <div className="absolute flex bottom-3 left-[90px] group-hover:opacity-0 transition-opacity">
                  <BiLogoReact size={40} className="text-blue-500" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                </div>
              </div>
            </div>

            {/* All Projects (3col) */}
            <div className="flex flex-col gap-8 md:gap-8 md:flex-row md:justify-between mx-auto justify-center items-center">
              {/* Project 1 */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl bg-contain inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={FormImage}
                  alt="FormImage"
                />
                <p
                  className={`absolute top-[140px] right-[15px] hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer text-slate-800 font-bold dark:font-normal dark:text-red-300 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300`}
                >
                  The Sign-Up-Form is a React application built using
                  TypeScript, Tailwind and React-hook-form
                </p>
                <div className="absolute bottom-[170px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://intro-component-with-sign-up-form-react.vercel.app/"
                  >
                    <BiLogoNetlify
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Netlify</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/intro-component-with-sign-up-form-React-"
                  >
                    <AiFillGithub size={40} />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-6 left-[50px]">
                  <h1
                    className={`text-bold text-3xl cursor-pointer text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300`}
                  >
                    Sign-Up-Form
                  </h1>
                </div>
                {/* Icons */}
                <div className="absolute flex bottom-3 left-[70px] opacity-100 group-hover:opacity-0 transition-opacity">
                  <BiLogoReact size={40} className="text-blue-500" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                  <Image
                    src={HookFormImage}
                    alt="HookFormImage"
                    height={40}
                    width={40}
                  />
                </div>
              </div>
              {/* Project 2 */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={FaqAccordion}
                  alt="FaqAccordion"
                />
                <p
                  className={`absolute top-[140px] right-[15px] text-slate-800 font-bold dark:font-normal dark:text-red-300 hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer  opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300`}
                >
                  FAQ Accordion: Elevate engagement effortlessly. This React and
                  TypeScript GitHub project lets you craft stylish, interactive
                  FAQ sections.
                </p>
                <div className="absolute bottom-[170px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://faq-accordion-reacttsx.netlify.app/"
                  >
                    <BiLogoNetlify
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Netlify</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/FaqAccordion-React"
                  >
                    <AiFillGithub
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-6 left-[50px]">
                  <h1 className="text-bold text-3xl cursor-pointer text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    Faq Accordion
                  </h1>
                </div>
                {/* Icons */}
                <div className="absolute flex bottom-3 left-[90px] opacity-100 group-hover:opacity-0 transition-opacity">
                  <BiLogoReact size={40} className="text-blue-700" />
                  <BiLogoTypescript size={40} className="text-blue-800" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                </div>
              </div>
              {/* Project 3 */}

              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={KanbanBoard}
                  alt="KanbanBoard"
                />
                <p
                  className={`absolute top-[140px] right-[20px] hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer text-slate-800 font-bold dark:font-normal dark:text-red-300 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300`}
                >
                  This is Kanban board that simplifies task management through
                  the power of drag-and-drop functionality
                </p>
                <div className="absolute bottom-[170px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://kanban-board-react-henna.vercel.app/"
                  >
                    <IoLogoVercel
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Vercel</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/KanbanBoard-React"
                  >
                    <AiFillGithub size={40} />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-6 left-[65px]">
                  <h1
                    className={`text-bold text-2xl w-full text-center items-center mx-auto cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300 hover:text-red-300 text-white`}
                  >
                    Kanban Board
                  </h1>
                </div>

                <div className="absolute flex bottom-3 left-[90px] opacity-100 group-hover:opacity-0 transition-opacity">
                  <BiLogoReact size={40} className="text-blue-500" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                </div>
              </div>
            </div>

            {/* All Projects (last cols) */}
            <div className="flex flex-col gap-8 md:gap-8 md:flex-row md:justify-between mx-auto justify-center items-center mb-8">
              {/* Project 1 */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={AdviceGeneratorSvelte}
                  alt="image"
                />
                <p className="absolute top-[140px] right-[20px] text-slate-800 font-bold dark:font-normal dark:text-red-300 hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  AdviceGenerator is a minimalist and user-friendly web
                  application Developed using Svelte, Tailwind and TypeScript.
                </p>
                <div className="absolute bottom-[170px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://advice-generator-svelte.netlify.app/"
                  >
                    <BiLogoNetlify
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Netlify</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/AdviceGenerator-Svelte"
                  >
                    <AiFillGithub
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-6 left-[50px]">
                  <h1 className="text-bold text-2xl w-full text-center items-center mx-auto cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300 hover:text-red-300 text-white">
                    Advice Generator
                  </h1>
                </div>

                <div className="absolute flex bottom-3 left-[80px] group-hover:opacity-0 transition-opacity">
                  <SiSvelte size={37} className="text-orange-600" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                  <SiAxios size={40} className="text-slate-700" />
                </div>
              </div>
              {/* Project 2 */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={InteractiveRatingComponentSvelte}
                  alt="InteractiveRatingComponentSvelte"
                />
                <p
                  className={`absolute top-[110px] right-[15px] text-slate-800 font-bold dark:font-normal dark:text-red-300 hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer  opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300`}
                >
                  The Interactive Rating Component is a user-friendly Svelte
                  Project that allows you to add interactive rating
                  functionalities to your web applications.
                </p>
                <div className="absolute bottom-[200px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://interactive-rating-component-svelte.netlify.app/"
                  >
                    <BiLogoNetlify
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Netlify</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/InteractiveRatingComponent-Svelte-"
                  >
                    <AiFillGithub
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-6 left-[10px]">
                  <h1 className="text-bold text-2xl w-full text-center items-center mx-auto cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300 hover:text-red-300 text-white">
                    Interactive Rating Component
                  </h1>
                </div>
                {/* Icons */}
                <div className="absolute flex bottom-3 left-[90px] opacity-100 group-hover:opacity-0 transition-opacity">
                  <SiSvelte size={40} className="text-orange-600" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                </div>
              </div>
              {/* last project */}
              <div className="relative h-full w-full hover:scale-105 duration-300 max-w-[300px] cursor-pointer group hover:rotate-180">
                <Image
                  className="rounded-xl inset-0 h-[300px] w-[300px] object-cover opacity-100 group-hover:opacity-20 hover:backdrop-blur-lg duration-300"
                  src={AdviceGeneratorReact}
                  alt="AdviceGeneratorReact"
                />
                <p
                  className={`absolute top-[140px] right-[20px] hover:backdrop-blur-none group-hover:-rotate-180 text-lg cursor-pointer text-slate-800 font-bold dark:font-normal dark:text-red-300 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300`}
                >
                  image AdviceGenerator is a minimalist and user-friendly web
                  application Developed using React, Tailwind and TypeScript.
                </p>
                <div className="absolute bottom-[170px] left-[80px] gap-[40px] hover:backdrop-blur-none flex flex-row group-hover:-rotate-180 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://advice-generator-reacttsx.netlify.app/"
                  >
                    <BiLogoNetlify
                      size={40}
                      className="hover:text-gray-600 dark:hover:text-red-400"
                    />
                    <h2>Netlify</h2>
                  </Link>

                  <Link
                    className="flex flex-col items-center hover:text-gray-600 dark:hover:text-red-400"
                    target="_blank"
                    href="https://github.com/Lazzzare/AdviceGenerator-React"
                  >
                    <AiFillGithub size={40} />
                    <h2>Github</h2>
                  </Link>
                </div>
                <div className="absolute top-6 left-[50px]">
                  <h1
                    className={`text-bold text-2xl w-full text-center items-center mx-auto cursor-pointer opacity-100 group-hover:opacity-0 transition-opacity duration-300 hover:text-red-300 text-white`}
                  >
                    Advice Generator
                  </h1>
                </div>
                {/* Icons */}
                <div className="absolute flex bottom-3 left-[80px] opacity-100 group-hover:opacity-0 transition-opacity">
                  <BiLogoReact size={40} className="text-blue-500" />
                  <BiLogoTypescript size={40} className="text-blue-700" />
                  <BiLogoTailwindCss size={40} className="text-blue-400" />
                  <SiAxios size={40} className="text-slate-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
