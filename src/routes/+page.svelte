<script>
  console.log("Hello from +page.svelte");
  export let data;
</script>

<h1 class="text-3xl font-bold underline text-red-700 first-letter:text-red-500">Hello world!</h1>
<a class="text-white" href="/task-manager">Go task</a>

<div class="text-white">{data.test1} and {data.test2}</div>
