"use client";
import React, { useEffect } from "react";
export default function Content(props) {
  useEffect(() => {
    console.log("Content component mounted !");
  }, []);
  return <p>{props.children}</p>;
}

// By default all the components are server components in nextjs !
