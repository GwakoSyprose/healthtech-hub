<template>
  <!-- Sidebar -->
  <aside class="flex flex-col items-center w-16 h-screen p-10 overflow-y-auto bg-brand-secondary border-r rtl:border-l rtl:border-r-0">
    <nav class="flex flex-col flex-1  space-y-6 items-center">
      <!-- Logo -->
      <a href="#">
        <img class="w-auto h-6" src="https://merakiui.com/images/logo.svg" alt="Logo" />
      </a>

      <!--Add Blog-->
      <RouterLink
        to="/add-blog"
        class="flex flex-col items-center p-2"
      >
      <button class="px-4 py-2 transition-colors duration-300 transform bg-brand-primary rounded-lg hover:bg-brand-primary-hover focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        <PlusIcon class="w-6 h-6 text-white" />
      </button>
    </RouterLink>

      <!-- Home -->
      <RouterLink
        to="/"
        class="flex flex-col items-center p-2 text-gray-700 hover:bg-brand-secondary-hover rounded"
      >
        <HomeIcon class="w-6 h-6" />
        <span class="text-xs mt-1">Home</span>
      </RouterLink>

      <!-- News -->
      <RouterLink
        to="/news"
        class="flex flex-col items-center p-2 text-gray-700 hover:bg-brand-secondary-hover rounded"
      >
        <NewspaperIcon class="w-6 h-6" />
        <span class="text-xs mt-1">News</span>
      </RouterLink>

      <!-- About -->
      <RouterLink
        to="/about"
        class="flex flex-col items-center p-2 text-gray-700 hover:bg-brand-secondary-hover rounded"
      >
        <InformationCircleIcon class="w-6 h-6" />
        <span class="text-xs mt-1">About</span>
      </RouterLink>

      <!-- Support -->
      <RouterLink
        to="/support"
        class="flex flex-col items-center p-2 text-gray-700 hover:bg-brand-secondary-hover rounded"
      >
        <QuestionMarkCircleIcon class="w-6 h-6" />
        <span class="text-xs mt-1">Support</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { PlusIcon, HomeIcon, NewspaperIcon, InformationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>


