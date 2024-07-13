import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { valueAtom } from "../atoms/valueAtom";
import { themeState } from "../atoms/themeAtom";

export const Counter = ({ operation }) => {
  const setValue = useSetRecoilState(valueAtom);

  const task = () => {
    setValue((value) => {
      const newValue = operation === "increase" ? value + 1 : value - 1;
      return newValue !== value ? newValue : value;
    });
  };

  const theme = useRecoilValue(themeState);

  return (
    <div
      className={`${
        theme === "light" ? "bg-black text-white" : "bg-white text-black"
      } px-4 py-1 text-lg font-semibold rounded-2xl `}
    >
      <button onClick={task}>
        {operation === "increase" ? "Increase" : "Decrease"}
      </button>
    </div>
  );
};
