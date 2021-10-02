import React, { useState } from "react";

const HOC = () => {
  return (
    <div>
      <h1>higher order component</h1>
      <HighOrderComp comp={<HOC2 />} />
      <HighOrderComp2 comp={<HOC2 />} />
    </div>
  );
};

const HighOrderComp = (props) => {
  return (
    <h2 style={{ backgroundColor: "red", color: "blue" }}> {props.comp}</h2>
  );
};
const HighOrderComp2 = (props) => {
    return (
      <h2 style={{ backgroundColor: "yellow", color: "green" }}> {props.comp}</h2>
    );
  };

const HOC2 = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={() => setcount(count + 1)}> Update Value</button>
    </div>
  );
};

export default HOC;
