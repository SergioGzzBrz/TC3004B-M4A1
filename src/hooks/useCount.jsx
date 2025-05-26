import React, { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const suma = () => {
    setCount(count + 1);
  };

  const resta = () => {
    setCount(count - 1);
  };
  return { count, suma, resta };
};

export default useCount;
