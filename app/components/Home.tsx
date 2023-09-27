"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import LatestProjects from "./LatestProjects";
import { useEffect, useState } from "react";
import FacebookMessage from "./FacebookMessage";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col pt-20 md:pt-40 gap-y-4">
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-bold text-xl md:text-3xl max-w-[450px] text-red-400 uppercase cursor-pointer hover:text-red-300">
            hello, my name is lazare
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-bold text-[32px] md:text-7xl">
            I make websites.
          </h1>
          <p className="text-xl md:text-2xl max-w-[800px] mt-2">
            Hey there! {`I'm`} a passionate front-end developer with a love for
            creating captivating web experiences
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 3, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-red-400 text-xl cursor-pointer hover:text-red-300 max-w-[240px]">
            I love{" "}
            <TypeAnimation
              sequence={[
                "Typescript",
                1000,
                "Javascript",
                1000,
                "React",
                1000,
                "Next.js",
                1000,
                "Tailwind",
                1000,
                "FramerMotion",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
        </motion.div>
      </div>

      <LatestProjects />
      <FacebookMessage />
    </div>
  );
};

export default Home;
