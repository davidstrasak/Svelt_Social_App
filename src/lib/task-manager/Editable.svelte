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
          dispatch("editFinish", { text: value });
        }
        if (event.key === "Escape") {
          isEditing = false;
          dispatch("editCancel", { text: value });
        }
      }}
    />
    <button
      class="flex underline"
      on:click={() => {
        isEditing = false;
        dispatch("editFinish", { text: value });
      }}>Close</button
    >
  </div>
{:else}
  <button
    class="block"
    on:click={() => {
      isEditing = true;
    }}
  >
    <slot />
  </button>
{/if}
