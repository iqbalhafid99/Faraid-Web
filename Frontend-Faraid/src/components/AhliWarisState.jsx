import { useState } from "react";

export function useAhliWarisState(initialCount) {
  const [count, setCount] = useState(initialCount);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMin() {
    setCount(count - 1);
  }

  return {
    count,
    handlePlus,
    handleMin,
  };
}
