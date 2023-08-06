"use client";
import sampleAction from "@/actions/sampleAction";
import React, { useState, useTransition } from "react";

export default function page() {
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState("");

  async function handleClick() {
    startTransition(async () => {
      const response = await sampleAction(
        "Hey there, I am calling a server action !"
      );
      setResponse(response);
    });
  }
  return (
    <div>
      Server Actions !
      <br />
      {isPending && <h1>Loading.........</h1>}
      <pre>{JSON.stringify(response, null, 2)}</pre>
      <button onClick={handleClick}>FETCH</button>
    </div>
  );
}

/**
 * In order to show some kind of loader there is a hook at our disposal named useTransition'
 * The useTransition hook returns isPending that indicates the status of the serverAction that is being processed
 * On the other hand the startTransitin function is the function that is responsible fior initiating the server action
 */
