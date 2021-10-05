import React, { useState, useEffect } from "react";

export default function LifeCycleFunctionalCompUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setname] = useState("Apple");

  //useState for windoew width 
  const [iswidth, setwidth] = useState(window.screen.width);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log('call when component is mount and props and state updates')
  });

  useEffect(() => {
    console.log(count);
    console.log('only when count updatees')
  }, [count]); // Only re-run the effect if count changes

  useEffect(() => {
    console.log(count + name);
    console.log('only when count and name updatees')
  }, [count, name]); // Only re-run the effect if count and name changes

  //call only when component is mount
  useEffect(() => {
    console.log('call only when component mount');
  },[]); 

  //UseEffect with clean 
  useEffect(() => {
    window.addEventListener('resize', ()=>{
      setwidth(window.innerWidth)
    })
    return () => {
      window.removeEventListener('resize', ()=>{
      setwidth(window.innerWidth)
    })
    }
  },[iswidth])

  return (
    <div>
      <h3>{name}</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setname("boy")}>Change Name</button>

      <h1 className="mb-5 mt-5 bg-primary">
        {iswidth}
      </h1>
    </div>
  );
}
