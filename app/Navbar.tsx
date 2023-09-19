import Image from "next/image";
import ProfileImage from "../public/profile.jpg";
import { BsFillPatchCheckFill, BsFillMoonStarsFill } from "react-icons/bs";
const Navbar = () => {
  const menuArray = [
    {
      itemTitle: "home",
    },
    {
      itemTitle: "skills",
    },
    {
      itemTitle: "project",
    },
    {
      itemTitle: "contact",
    },
  ];
  return (
    <div className="w-full flex flex-row justify-between text-black">
      {/* LeftSide */}
      <div className="flex items-center gap-x-2">
        <Image
          src={ProfileImage}
          alt="ProfileImage"
          className="w-[48px] h-[48px] rounded-full object-cover mr-2"
        />
        <h2 className="font-medium text-lg">Lazzzare</h2>
        <BsFillPatchCheckFill className="text-blue-500 w-6 h-6" />
      </div>
      {/* RightSide */}
      <div className="flex items-center gap-x-5">
        {menuArray.map((item) => {
          return (
            <>
              <h3 className="cursor-pointer">{item.itemTitle}</h3>
            </>
          );
        })}
        <BsFillMoonStarsFill className="w-[20px] h-[20px] ml-3 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
