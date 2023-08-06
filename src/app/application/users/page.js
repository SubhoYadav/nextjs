import React from "react";
// This code runs on the server
const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);
//  This code runs on the server

export default function Page() {
  return (
    <div>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
}
