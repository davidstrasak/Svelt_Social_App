<script>
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
