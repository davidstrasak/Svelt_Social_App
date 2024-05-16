import { writable } from "svelte/store";

const DEFAULT_DATA = [
  {
    id: "l-1",
    text: "List 1",
    items: [
      { id: "t-1", text: "Task 1", isEditing: false },
      { id: "t-2", text: "Task 2", isEditing: false },
      { id: "t-3", text: "Task 3", isEditing: false }
    ]
  },
  {
    id: "l-2",
    text: "List 2",
    items: [
      { id: "t-4", text: "Task 4", isEditing: false },
      { id: "t-5", text: "Task 5", isEditing: false },
      { id: "t-6", text: "Task 6", isEditing: false }
    ]
  },
  {
    id: "l-3",
    text: "List 3",
    items: [
      { id: "t-7", text: "Task 7", isEditing: false },
      { id: "t-8", text: "Task 8", isEditing: false },
      { id: "t-9", text: "Task 9", isEditing: false }
    ]
  }
];

function createStore() {
  const storedList = localStorage.getItem("task-manager-store");
  const _taskList = storedList ? JSON.parse(storedList) : DEFAULT_DATA;

  const taskList = writable(_taskList);
  const { subscribe, update } = taskList;

  return {
    subscribe,
    updateTask: (task, listIdx) => {
      update((list) => {
        const taskIdx = list[listIdx].items.findIndex((item) => item.id === task.id);

        if (taskIdx > -1) {
          list[listIdx].items[taskIdx] = { ...task };
        }

        return list;
      });
    },

    addList: () => {
      update((list) => {
        return [
          ...list,
          {
            id: new Date().toISOString(),
            text: `List ${list.length + 1}`,
            items: []
          }
        ];
      });
    },
    addTask: (listIdx) => {
      update((list) => {
        const { items } = list[listIdx];

        list[listIdx].items = [
          ...items,
          { id: new Date().toISOString(), text: "What to do?", isEditing: true }
        ];
        return list;
      });
    },
    moveTask: (sourceData, moveToListIdx) => {
      update((list) => {
        const [task] = list[sourceData.listIdx].items.splice(sourceData.taskIdx, 1);
        list[moveToListIdx].items.push(task);
        return list;
      });
    },
    removeTask: () => {
      alert("removeTask");
    }
  };
}

export const taskListStore = createStore();

taskListStore.subscribe((list) => {
  localStorage.setItem("task-manager-store", JSON.stringify(list));
});
