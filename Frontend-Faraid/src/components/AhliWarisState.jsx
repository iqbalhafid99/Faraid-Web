import { useState } from "react";

export function useAhliWarisState(initialValue, maxCount = Infinity) {
  const [count, setCount] = useState(initialValue);

  const handleMin = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handlePlus = () => {
    setCount((prevCount) => (prevCount < maxCount ? prevCount + 1 : maxCount));
  };

  return {
    count,
    handleMin,
    handlePlus,
  };
}
