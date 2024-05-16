<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let value;
  let isEditing = false;
</script>

{#if isEditing}
  <div class="flex-it">
    <textarea
      bind:value
      on:keydown={(event) => {
        if (event.key === "Enter") {
          isEditing = false;
          dispatch("editFinished", {
            taskText: value
          });
        }
        if (event.key === "Escape") {
          isEditing = false;
          dispatch("editCanceled", {
            taskText: value
          });
        }
      }}
    />
    <button
      on:click={() => {
        isEditing = false;
        dispatch("editFinished", {
          taskText: value
        });
      }}
      class="flex underline"
      >Close
    </button>
  </div>
{:else}
  <button on:click={() => (isEditing = true)}>
    <slot />
  </button>
{/if}
