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
  const styles = {
    border: "2px solid red",
  };
  return (
    <button
      onClick={showAlert}
      style={styles}
      className="btn btn-danger btn-sm m-2"
    >
      Click Me !
    </button>
  );
}
