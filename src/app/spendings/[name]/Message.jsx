import React from "react";

export default function Message(props) {
  console.log("This is Serverr Component !");
  return <div>{props.children}</div>;
}
