<script>
  import { afterUpdate, onMount } from "svelte";
  import Portal from "./Portal.svelte";
  let isOpen = false;
  let openerMenu;
  let popupBottomPosition;

  onMount(() => {
    addEventListener("click", closePopup);

    return () => {
      removeEventListener("click", closePopup);
    };
  });
  function closePopup() {
    isOpen && (isOpen = false);
  }

  afterUpdate(() => {
    if (isOpen) {
      popupBottomPosition = openerMenu.clientHeight + 10 + "px";
    }
  });
</script>

<div class="flex-it">
  <div bind:this={openerMenu} class="flex-it">
    <button
      on:click|stopPropagation={() => {
        isOpen = true;
      }}
    >
      <slot />
    </button>
  </div>
  {#if isOpen}
    <Portal>
      <div
        style="bottom: {popupBottomPosition}"
        class="flex-it hover:cursor-pointer fixed bg-gray-800 text-white popup rounded-2xl border-gray-700 border transition duration-1000"
      >
        <div class="w-72 min-w-68 max-h-120 min-h-8 flex-it overflow-auto">
          <div class="flex-it flex-grow flex-shrink py-3">
            <div class="flex-it px-4 py-3 transition hover:bg-gray-700">Logout</div>
          </div>
        </div>
      </div>
    </Portal>
  {/if}
</div>
