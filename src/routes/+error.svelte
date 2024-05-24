<script>
  import { page } from "$app/stores";
</script>

<div class="text-white flex-it justify-center items-center h-full">
  <div class="text-center">
    <div class="text-4xl font-bold">
      <h1>oops, looks like this page does not exist.</h1>
      {$page.status} - {$page.error.message}
      <br />
      <br />
      <br />
      <a class="underline" href="/">Go back to the home page</a>
    </div>
  </div>
</div>
