"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Linkedin from "../images/Linkedin.png";
import Github from "../images/github-icon.png";
import Gmail from "../images/Gmail.png";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="mt-32">
      <div>
      <h1 className="text-4xl font-bold tracking-wide">Contact</h1>
      <div className="flex flex-row gap-10 justify-center items-center">
        <form
          method="POST"
          action="https://getform.io/f/193741d2-0b2d-47e1-aa61-d8bfb1002308"
          className="mt-8 max-w-[600px] w-full flex flex-col space-y-4"
        >
          <input
            className="p-2 border-2 border-transparent focus:border-red-400 rounded focus:outline-none"
            type="text"
            placeholder="Name"
            name="name"
            required
            />
          <input
            className="p-2 border-2 border-transparent focus:border-red-400 rounded focus:outline-none"
            type="email"
            placeholder="Email"
            name="email"
            required
            />
          <textarea
            className="p-2 border-2 border-transparent focus:border-red-400 rounded focus:outline-none"
            name="message"
            rows={10}
            placeholder="Message"
            required
            ></textarea>
          <button className="bg-red-500 text-lg font-bold w-full px-8 py-3 text-white items-center mx-auto rounded">
            Submit
          </button>
        </form>
      </div>
        <div className="items-center flex flex-row justify-center mx-auto gap-8 bg-slate-400 px-12 py-4 rounded-md">
          <Link href="https://www.linkedin.com/in/lazare-chkhartishvili-0a6434235/" target="_blank">
            <Image src={Linkedin} width={50} height={50} alt="Linkedin" />
          </Link>
          <Link href="https://github.com/Lazzzare" target="_blank">
            <Image src={Github} width={50} height={50} alt="Github" />
          </Link>
          <Link href="mailto:chxartishvililazare@gmail.com" target="_blank">
            <Image src={Gmail} width={50} height={50} alt="Gmail" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
