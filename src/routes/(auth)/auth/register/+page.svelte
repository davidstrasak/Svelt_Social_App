<script>
  import AuthLayout from "$lib/layouts/AuthLayout.svelte";
</script>

<AuthLayout title="Create an account">
  <form class="flex-it">
    <div class="flex-it overflow-hidden sm:rounded-md">
      <div class="flex-it">
        <div class="flex-it">
          <div class="flex-it py-2">
            <label for="fullName" class="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <div class="flex-it grow text-xs bg-red-400 text-white p-3 pl-3 mt-1 rounded-md">
              Error Error Beep Beep!
            </div>
          </div>

          <div class="flex-it py-2">
            <label for="nickName" class="block text-sm font-medium text-gray-700">
              Nick Name
            </label>
            <input
              type="text"
              name="nickName"
              id="nickName"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div class="flex-it py-2">
            <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
            <input
              type="text"
              name="email"
              id="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div class="flex-it py-2">
            <label for="avatar" class="block text-sm font-medium text-gray-700"> Avatar </label>
            <input
              type="text"
              name="avatar"
              id="avatar"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div class="flex-it py-2">
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <input
              type="password"
              name="password"
              id="password"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div class="flex-it py-2">
            <label for="passwordConfirmation" class="block text-sm font-medium text-gray-700">
              Password Confirmation
            </label>
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      <div class="text-sm text-gray-600 pb-4">
        Already Registered?{" "}
        <a class="hover:underline" href="/auth/login"> Go to Login </a>
      </div>
      <div class="flex-it py-2">
        <button
          type="button"
          class="
                bg-blue-400 hover:bg-blue-500 focus:ring-0
                disabled:cursor-not-allowed disabled:bg-gray-400
                inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2"
        >
          Register
        </button>
      </div>
    </div>
  </form>
</AuthLayout>
