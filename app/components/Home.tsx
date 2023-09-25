"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import LatestProjects from "./LatestProjects";
const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col pt-40 gap-y-4">
          <h2 className="font-bold text-3xl text-red-400 uppercase cursor-pointer hover:text-red-300">
            hello, my name is lazare
          </h2>
          <h1 className="font-bold text-7xl">I make websites.</h1>
          <p className="text-2xl max-w-[800px] mt-2">
            Hey there! {`I'm`} a passionate front-end developer with a love for
            creating captivating web experiences
          </p>
          <h3 className="text-red-400 text-xl cursor-pointer hover:text-red-300 max-w-[180px]">
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
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
        </div>
      </motion.div>
      {/* <LatestProjects /> */}
    </div>
  );
};

export default Home;
