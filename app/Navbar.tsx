import Image from "next/image";
import ProfileImage from "../public/profile.jpg";
import {
  BsFillPatchCheckFill,
  BsFillMoonStarsFill,
  BsSun,
} from "react-icons/bs";

interface props {
  darkMode: boolean;
  setDarkMode: (e: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: props) => {
  const menuArray = ["home", "skills", "project", "contact"];

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } w-full flex flex-row justify-between text-black`}
    >
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
      <div className="flex items-center gap-x-5 dark:text-white">
        {menuArray.map((item, index) => (
          <li key={index} className="list-none">
            <h3 key={index} className="cursor-pointer">
              {item}
            </h3>
          </li>
        ))}
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className="w-[20px] h-[20px] ml-3 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
