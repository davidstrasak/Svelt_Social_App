<script>
  import TiTrash from "svelte-icons/ti/TiTrash.svelte";
  import TiMessage from "svelte-icons/ti/TiMessage.svelte";
  import TiHeartOutline from "svelte-icons/ti/TiHeartOutline.svelte";

  export let glide;
</script>

<div class="flex-it p-4 border-b-1 border-solid border-gray-700">
  <div class="flex-it flex-row">
    <div class="flex-it mr-4">
      <div
        class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80"
      >
        <img alt="" class="rounded-full" src={glide.user.avatar} />
      </div>
    </div>
    <article class="flex-it flex-grow flex-shrink cursor-pointer">
      <div class="flex-it justify-center flex-grow mb-1">
        <div class="flex-it justify-between flex-row w-full">
          <div>
            <span class="font-bold">{glide.user.nickName}</span>
            <span class="mx-2">&#8226;</span>
            <span class="text-gray-400">2h</span>
          </div>
          <div class="text-gray-400 cursor-pointer transition hover:text-red-400">
            <div class="icon">
              <TiTrash />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-it flex-row flex-grow-0 items-center mb-2">
        <div class="flex-it mr-3 mb-3 w-full">{glide.content}</div>
      </div>
      <div class="flex-it flex-row flex-grow text-gray-400">
        <div
          class="flex-it flex-row items-center cursor-pointer mr-5 transition hover:text-blue-400"
        >
          <div class="icon">
            <TiMessage />
          </div>
          <span class="text-xs ml-3">{glide.commentsCount}</span>
        </div>
        <div class="flex-it flex-row items-center cursor-pointer transition hover:text-pink-400">
          <div class="icon">
            <TiHeartOutline />
          </div>
          <span class="text-xs ml-3">{glide.likesCount}</span>
        </div>
      </div>
    </article>
  </div>
</div>
