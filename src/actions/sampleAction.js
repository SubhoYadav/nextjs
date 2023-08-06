"use server";
export default async function sampleAction(message) {
  console.log(message);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Success !",
      });
    }, 2000);
  });
}

// In order to use server actions we need to explicitly mark the component as server component
