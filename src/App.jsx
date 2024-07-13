import React from "react";
import { useRecoilValue } from "recoil";
import { themeState } from "./atoms/themeAtom";
import { ToggleTheme } from "./components/ToggleTheme";
import { valueAtom } from "./atoms/valueAtom";
import { Counter } from "./components/Counter";

const App = () => {
  const theme = useRecoilValue(themeState);
  const value = useRecoilValue(valueAtom);

  return (
    <div className={`App ${theme} w-full h-screen`}>
      <ToggleTheme />
      <div className="flex gap-5">
        <Counter operation="decrease" />
        <span
          className={`${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          } px-4 py-1 text-lg font-semibold rounded-2xl `}
        >
          {value}
        </span>
        <Counter operation="increase" />
      </div>
    </div>
  );
};

export default App;
