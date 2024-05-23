<script>
  import TiHomeOutline from "svelte-icons/ti/TiHomeOutline.svelte";
  import TaskList from "$lib/task-manager/TaskList.svelte";
  import { taskListStore } from "$stores/tasks";
</script>

<div class="p-10 h-full">
  <a class="text-white flex-it items-start flex-grow w-full" href="/">
    <div
      class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200"
    >
      <div class="flex-it">
        <div class="icon">
          <TiHomeOutline />
        </div>
      </div>
      <div class="mx-4 text-2xl truncate xl:block hidden">
        <span class="truncate">Go back home</span>
      </div>
    </div>
  </a>
  <button
    on:click={taskListStore.addList}
    class="text-xl mb-3 text-white font-bold cursor-pointer hover:underline flex items-start"
  >
    + Add List
  </button>
  <div class="flex-it h-full flex-1">
    <div class="flex-it flex-row rounded-xl h-full">
      {#each $taskListStore as list, listIdx (list.id)}
        <TaskList {list} {listIdx} />
      {/each}
    </div>
  </div>
</div>
