"use client";
import React from "react";
import Button from "./Button";
import Message from "./Message";
export default function page(props) {
  return (
    <div>
      <hr />
      <Message>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Message>
      <Message>This is user List</Message>
      <br />
      <Button></Button>
    </div>
  );
}

// The "use client" directive will make the default server component into a client component
