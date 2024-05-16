export const ssr = false;

export function load() {
  const randomNum = Math.floor(Math.random() * 10);
  console.log("Random number: ", randomNum);

  return { test1: "Hello world", test2: randomNum };
}
