import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/themeAtom";
import { CgMoon, CgSun } from "react-icons/cg";

export const ToggleTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme((val) => (val === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className={`py-2 px-3 ${
        theme === "light" ? "bg-black text-white" : "bg-white text-black"
      } rounded-xl  text-semibold m-2 text-xl`}
    >
      {theme === "light" ? <CgSun /> : <CgMoon />}
    </button>
  );
};
