import React, { useEffect } from "react";

export default function Button() {
  function showAlert() {
    alert("Hope you are fine !");
  }
  useEffect(() => {
    console.log("Button mounted !");
  }, []);
  console.log(
    "Components inside the app directory are by default server components !"
  );
  return <button onClick={showAlert}>Click Me !</button>;
}
