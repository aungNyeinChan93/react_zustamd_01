import React from "react";
import useCounter from "../stores/UseCounter";
import TestProxy from "./TestProxy";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter((store) => store);
  return (
    <React.Fragment>
      <section className="w-full h-screen flex justify-center items-center ">
        <TestProxy /> ||
        {count}
        <button
          type="button"
          className="px-4 py-2 mx-1 bg-indigo-300 rounded"
          onClick={() => increment()}
        >
          +
        </button>{" "}
        <br />
        <button
          type="button"
          className="px-4 py-2 mx-1 bg-indigo-300 rounded"
          onClick={() => decrement()}
        >
          -
        </button>{" "}
        <br />
        <button
          type="button"
          className="px-4 py-2 mx-1 bg-indigo-300 rounded"
          onClick={() => reset()}
        >
          reset
        </button>
      </section>
    </React.Fragment>
  );
};

export default Counter;
