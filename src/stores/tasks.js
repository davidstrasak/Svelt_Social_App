import { writable } from "svelte/store";

function createStore() {
  const taskList = writable([], () => {
    console.log("Subscribed");

    const id = setInterval(() => {
      console.log("Updated");
    }, 1000);

    return () => {
      console.log("Unsubscribed");
      clearInterval(id);
    };
  });

  return taskList;
}

export const taskListStore = createStore();
