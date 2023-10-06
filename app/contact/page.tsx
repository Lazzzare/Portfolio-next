"use client";
import React from "react";

const page = () => {
  return (
    <div className="mt-32">
      <h1 className="text-4xl font-bold tracking-wide">Contact</h1>
      <div className="flex flex-row">
        <form
          method="POST"
          action="https://getform.io/f/193741d2-0b2d-47e1-aa61-d8bfb1002308"
          className="mt-8 max-w-[600px] w-full flex flex-col space-y-4"
        >
          <input className="p-2" type="text" placeholder="Name" name="name" required />
          <input
            className="p-2 outline-red-400"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="p-2"
            name="message"
            rows={10}
            placeholder="Message"
            required
          ></textarea>
          <button className="bg-red-500 text-lg font-bold w-full px-8 py-3 text-white items-center mx-auto">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
