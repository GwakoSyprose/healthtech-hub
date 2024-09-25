<template>
    <button
      class="md:hidden p-4 absolute top-0 right-0 m-4 focus:outline-none"
      @click="toggleSidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
</template>
  
<script setup>
  const props = defineProps({
    toggleSidebar: {
      type: Function,
      required: true,
    },
  })
</script>
  