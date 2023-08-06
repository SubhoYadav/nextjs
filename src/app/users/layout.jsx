import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <hr />
      {children}
      <hr />
    </div>
  );
}
