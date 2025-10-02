<script setup></script>

<template>
  <div
    class="mt-7 flex flex-col items-center justify-center p-2 text-center bg-gray-50 rounded-2xl shadow-sm"
  >
    <!-- Icon -->
    <div
      class="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 mb-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-pink-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>

    <!-- Message -->
    <h2 class="text-lg font-semibold text-gray-700">No weight history yet</h2>
    <p class="text-gray-500 mt-1 max-w-md">
      Start tracking your weight today and see your progress over time.
    </p>

    <!-- Call to Action -->
    <button
      class="mt-3 bg-pink-600 hover:bg-pink-500 text-white px-3 py-1 rounded-lg shadow-md transition"
    >
      Add Your First Weight
    </button>
  </div>
</template>
