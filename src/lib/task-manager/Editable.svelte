<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let value;
  let isEditing = false;
</script>

{#if isEditing}
  <div class="flex-it">
    <textarea bind:value />
    <button
      class="flex underline"
      on:click={() => {
        isEditing = false;
        dispatch("editCancel", { text: value, rick: "roll" });
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
