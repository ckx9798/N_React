import { useEffect, useState } from "react";

// function Hello() {
//   useEffect(() => {
//     console.log("created");
//     return () => console.log("destroyed");
//   }, []);
//   return <div> hello</div>;
// }

function Hello() {
  function byeFn() {
    console.log("destroyed");
  }
  function hiFn() {
    console.log("created");
    return byeFn;
  }
  useEffect(hiFn, []);
  return <div> hello</div>;
}

export default function Cleanup() {
  const [showing, setshowing] = useState(false);
  const onClick = () => setshowing((prev) => !prev);
  return (
    <>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </>
  );
}
