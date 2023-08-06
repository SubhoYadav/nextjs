"use client";
import React from "react";
import Button from "./Button";
export default function page(props) {
  return (
    <div>
      {JSON.stringify(props, null, 2)}
      <br />
      <Button className="bg-red-200"></Button>
    </div>
  );
}

// The "use client" directive will make the default server component into a client component
