<script>
  import TiImageOutline from "svelte-icons/ti/TiImageOutline.svelte";

  let glideContent = "";
  let glides = [];

  import GlidePost from "$lib/glides/GlidePost.svelte";

  function createGlide() {
    const date = new Date();
    const glide = {
      id: date,
      content: glideContent,
      user: {
        nickName: "David",
        avatar: "https://thrangra.sirv.com/Avatar1.png"
      },
      likesCount: 0,
      commentsCount: 0
    };

    glides = [glide, ...glides];
    console.log(glides);
    glideContent = "";
  }
  function KPHandle(event) {
    if (event.key === "Enter") {
      createGlide();
      event.preventDefault();
    }
  }
</script>

<!-- HOME PAGE START -->
<div class="flex-it py-1 px-4 flex-row">
  <div class="flex-it mr-4">
    <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
      <img alt="" class="rounded-full" src="https://thrangra.sirv.com/Avatar1.png" />
    </div>
  </div>
  <!-- MESSENGER START -->
  <div class="flex-it flex-grow">
    <div class="flex-it">
      <textarea
        bind:value={glideContent}
        on:keydown={KPHandle}
        name="content"
        id="glide"
        class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
        placeholder={"What's new?"}
      />
    </div>
    <div class="flex-it mb-1 flex-row xs:justify-between items-center">
      <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
        <div class="upload-btn-wrapper">
          <div class="icon">
            <TiImageOutline />
          </div>
          <input type="file" name="myfile" />
        </div>
      </div>
      <div class="flex-it w-32 mt-3 cursor-pointer">
        <button
          type="button"
          class="disabled:cursor-not-allowed disabled:bg-gray-400bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
          on:click={createGlide}
        >
          <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
            <span>Glide It</span>
          </div>
        </button>
      </div>
    </div>
  </div>
  <!-- MESSENGER END -->
</div>

<div class="h-px bg-gray-700 my-1" />
<!-- GLIDE POST START -->
{#each glides as glide}
  <GlidePost {glide} />
{/each}
<!-- GLIDE POST END -->
<!-- HOME PAGE END -->
