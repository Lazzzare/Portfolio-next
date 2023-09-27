import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoTailwindCss,
} from "react-icons/bi";

import { FiFramer } from "react-icons/fi";
import TodoProjectImage from "../images/TodoProjectImage.png";
import TicTacToe from "../images/TicTacToe.jpg";

export const latestProjectsArray = [
  {
    id: 1,
    title: "Todo App",
    src: TodoProjectImage,
    icons: [
      <>
        <BiLogoReact size={40} className="text-blue-500" />
        <BiLogoTypescript size={40} className="text-blue-700" />
        <BiLogoTailwindCss size={40} className="text-blue-400" />
        <FiFramer size={40} className="text-white" />
      </>,
    ],
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    src: TicTacToe,
    icons: [
      <>
        <BiLogoReact size={40} className="text-blue-500" />
        <BiLogoTypescript size={40} className="text-blue-700" />
        <BiLogoTailwindCss size={40} className="text-blue-400" />
      </>,
    ],
  },
];
