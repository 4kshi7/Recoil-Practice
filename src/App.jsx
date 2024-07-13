import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { themeState } from "./atoms/themeAtom";
import { ToggleTheme } from "./components/ToggleTheme";
import { valueAtom } from "./atoms/valueAtom";

const Increment = () => {
  const setValue = useSetRecoilState(valueAtom);
  const incrementVal = () => {
    setValue((value) => value + 1);
  };

  return (
    <div>
      <button onClick={incrementVal}>+</button>
    </div>
  );
};

const Decrement = () => {
  const setValue = useSetRecoilState(valueAtom);
  const decrement = () => {
    setValue((value) => value - 1);
  };
  return <button onClick={decrement}>-</button>;
};

const App = () => {
  const theme = useRecoilValue(themeState);
  const value = useRecoilValue(valueAtom);

  return (
    <div className={`App ${theme} w-full h-screen`}>
      <ToggleTheme />
      <div>{value}</div>
      <Increment />
      <Decrement />
    </div>
  );
};

export default App;
