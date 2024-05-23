<script>
  import navLinks from "./navLinks";
</script>

<header class="lg:flex-grow flex-it items-end">
  <div class="xl:w-80 w-20 flex-it">
    <div class="h-full fixed flex-it top-0">
      <div class="flex-it h-full xl:w-80 w-20 overflow-y-auto px-3 justify-between">
        <div class="flex-it items-start">
          <div
            class="p-3 pt-4 xl:pb-3 pb-0 xl:text-2xl text-sm font-bold transition duration-200 hover:opacity-80"
          >
            <a href="/">
              <h1>Glider</h1>
            </a>
          </div>
          <div class="my-1 w-full flex-it">
            <nav class="flex-it items-start">
              {#each navLinks as link}
                <a class="flex-it items-start flex-grow w-full" href={link.href}>
                  <div
                    class="p-3 flex-row justify-center items-center flex-it rounded-3xl hover:bg-gray-800 hover:rounded-3xl transition duration-200"
                  >
                    <div class="flex-it">
                      <div class="icon">
                        <svelte:component this={link.icon} />
                      </div>
                    </div>
                    <div class="mx-4 text-2xl truncate xl:block hidden">
                      <span class="truncate">{link.name}</span>
                    </div>
                  </div>
                </a>
              {/each}
              <!-- <FiMoreHorizontal /> -->
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
