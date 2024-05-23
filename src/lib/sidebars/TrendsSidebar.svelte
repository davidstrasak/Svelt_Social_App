<script>
  const randomize = () => Math.floor(Math.random() * 500);

  const trends = [
    {
      category: "Sports",
      content: "Some team won the championship",
      glideCount: randomize()
    },
    {
      category: "Politics",
      content: "Some politician did something",
      glideCount: randomize()
    },
    {
      category: "Technology",
      content: "Some company released a new product",
      glideCount: randomize()
    },
    {
      category: "Entertainment",
      content: "Some actor did something",
      glideCount: randomize()
    },
    {
      category: "Health",
      content: "Some new disease is spreading",
      glideCount: randomize()
    },
    {
      category: "Science",
      content: "Some new discovery was made",
      glideCount: randomize()
    }
  ];
</script>

<div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
  <div class="flex-it p-4">
    <span class="text-xl font-bold">Trends</span>
  </div>
  {#each trends as trend}
    <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
      <div class="flex-it">
        <span class="text-gray-400 text-sm"> {trend.content} </span>
        <span class="text-lg font-bold">{trend.category}</span>
        <span class="text-gray-400 text-sm">{trend.glideCount} glides</span>
      </div>
    </div>
  {/each}
</div>
