import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { valueAtom } from "../atoms/valueAtom";
import { themeState } from "../atoms/themeAtom";

export const Increment = () => {
  const setValue = useSetRecoilState(valueAtom);
  const IncrementVal = () => {
    setValue((value) => value + 1);
  };

  const theme = useRecoilValue(themeState);

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-black text-white"
          : "bg-white text-black"
      } px-4 py-1 text-lg font-semibold rounded-2xl `}
    >
      <button onClick={IncrementVal}>Increase</button>
    </div>
  );
};
