export const ssr = false;

export function load() {
  console.log("Hello from +page.js");
  return { test1: "Hello world", test2: 1000 };
}
