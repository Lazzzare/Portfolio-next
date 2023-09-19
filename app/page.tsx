"use client";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
