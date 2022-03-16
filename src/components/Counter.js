import React from "react";

export const Counter = () => {
  const [value, setValue] = React.useState(0);
  const handleIncrease = () => {
    setValue((state) => state + 1);
  };
  const handleDecrease = () => {
    setValue((state) => (state > 0 ? state - 1 : 0));
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};
