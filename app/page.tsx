"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import RootLayout from "./layout";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <RootLayout darkMode={darkMode}>
      <div className="">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </RootLayout>
  );
}
