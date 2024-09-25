<template>
    <aside
      @click="closeSidebarOnItemClick"
      :class="{
          'hidden md:flex': !isSidebarOpen,
          'flex': isSidebarOpen,
        }"
      class="fixed inset-0 z-30 flex flex-col items-center w-16 lg:w-20 min-h-full p-10 bg-brand-secondary border-r rtl:border-l rtl:border-r-0 md:relative md:flex"
    >
    <nav class="flex flex-col flex-1 space-y-6 items-center"> 
      <a href="#">
        <img class="w-auto h-12 mb-12" src="../assets/logo.png" alt="Logo" />
      </a>
      <RouterLink
        to="/add-blog"
        class="flex flex-col items-center p-2"
      >
      <button class="px-4 py-2 transition-colors duration-300 transform bg-brand-primary rounded-lg hover:bg-brand-primary-hover focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        <PlusIcon class="w-6 h-6 text-white" />
      </button>
    </RouterLink>
      <RouterLink
        to="/"
        class="flex flex-col items-center p-2 text-gray-700 hover:bg-brand-secondary-hover rounded"
      >
        <HomeIcon class="w-6 h-6" />
        <span class="text-xs mt-1">Home</span>
      </RouterLink>
      <RouterLink
        to="/blogs"
        class="flex flex-col items-center p-2 text-gray-700 hover:bg-brand-secondary-hover rounded"
      >
        <NewspaperIcon class="w-6 h-6" />
        <span class="text-xs mt-1">Blogs</span>
      </RouterLink>
      <RouterLink
        to="/about"
        class="flex flex-col items-center p-2 text-gray-700 hover:bg-brand-secondary-hover rounded"
      >
        <InformationCircleIcon class="w-6 h-6" />
        <span class="text-xs mt-1">About</span>
      </RouterLink>
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
import { defineProps } from 'vue'
import { PlusIcon, HomeIcon, NewspaperIcon, InformationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  isSidebarOpen: {
    type: Boolean,
    required: true,
  },
  closeSidebarOnItemClick: {
      type: Function,
      required: true,
    }
})

</script>


