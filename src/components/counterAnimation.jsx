import { useEffect, useState } from "react";

export default function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16.7); // Approx 60fps

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16.7);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
}
