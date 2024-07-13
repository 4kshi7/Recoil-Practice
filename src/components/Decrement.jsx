import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { valueAtom } from "../atoms/valueAtom";
import { themeState } from "../atoms/themeAtom";

export const Decrement = () => {
  const setValue = useSetRecoilState(valueAtom);
  const decrementVal = () => {
    setValue((value) => value - 1);
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
      <button onClick={decrementVal}>Decrease</button>
    </div>
  );
};
