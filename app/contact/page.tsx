"use client";
import React from "react";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'

const page = () => {
  return (
    <div className="mt-32">
      <h1 className="text-4xl font-bold tracking-wide">Contact</h1>
      <div className="flex flex-row gap-10">
        <form
          method="POST"
          action="https://getform.io/f/193741d2-0b2d-47e1-aa61-d8bfb1002308"
          className="mt-8 max-w-[600px] w-full flex flex-col space-y-4"
        >
          <input className="p-2 border-2 border-transparent focus:border-red-400 rounded focus:outline-none" type="text" placeholder="Name" name="name" required />
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
        <div className="items-center flex flex-row justify-center mx-auto gap-4 text-4xl">
          <AiFillLinkedin className="text-[#0e76a8]" />
          <AiFillGithub />
          <BiLogoGmail />
        </div>
      </div>
    </div>
  );
};

export default page;
