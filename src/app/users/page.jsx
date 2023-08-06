import React from "react";
import Content from "@/components/Content";
import Link from "next/link";

export default async function page() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((respBin) => respBin.json());
  console.log(response);

  // return <pre>{JSON.stringify(response, null, 2)}</pre>;
  return (
    // <pre>
    //   {response.map((user) => {
    //     return <p style={{ padding: "8px" }}>{user.email}</p>;
    //   })}
    // </pre>
    <div
      style={{
        padding: "20px",
      }}
    >
      {response.map((user) => {
        return (
          <Link prefetch={true} href={`/users/${user.id}`}>
            <Content>{user.email}</Content>
          </Link>
        );
      })}
    </div>
  );
}

/**
 * If you want to use the apis of react then import a client component into the server component
 */
