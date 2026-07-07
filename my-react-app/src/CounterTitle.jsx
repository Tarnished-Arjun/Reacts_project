import { useState, useEffect } from "react";

function CounterTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter : ${count}`;
  }, [count]);

  return (
    <>
      <h1>Counter : {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default CounterTitle;