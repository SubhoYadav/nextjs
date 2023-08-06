import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          padding: "10px",
        }}
      >
        <li style={{ margin: "10px" }}>
          <Link href={"/application"}>Home</Link>
        </li>
        <li style={{ margin: "10px" }}>
          <Link href={"/application/users"}>Users</Link>
        </li>
      </ul>
      <hr></hr>
      {children}
      <p>Application Footer</p>
    </div>
  );
}
