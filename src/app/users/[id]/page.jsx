import React from "react";
// Exporting a metadata object
// export const metadata = {
//   title: "User Detail Page",
//   description: "This page contains the details of the user !",
// };

// generating dynamic metadata using generateMetadats
export async function generateMetadata({ params, serachParams }) {
  const user = await getUserDetails(params.id);
  return {
    title: user.name,
    description: user.email,
  };
}

async function getUserDetails(userId) {
  const user = await new Promise((resolve) => {
    setTimeout(async () => {
      resolve(
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          cache: "no-cache",
          revalidate: 10,
        }).then((response) => response.json())
      );
    }, 2000);
  });
  return user;
}

export default async function page({ params, searchParams }) {
  const user = await getUserDetails(params.id);
  console.log("User", user);
  return (
    <div>
      {/* <pre>{JSON.stringify(params, null, 12)}</pre>
      <pre>{JSON.stringify(searchParams, null, 12)}</pre> */}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

/**
 * As we can see that both the generateMetadata and the page component are making the call to the api
 * Nextjs implements caching so that the data is not fetched many times
 */
