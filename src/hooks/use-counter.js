import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  //default value, if user doesn't want to flag
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter + -1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;
