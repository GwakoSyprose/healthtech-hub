<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Main Content -->
    <main class="flex-1 p-10 bg-brand-tertiary">
    <div class="relative min-h-full lg:p-8 md:p-6 2xl:p-6 bg-white rounded-large flex flex-col">   
      <div class="absolute top-10 left-6 lg:m-4 flex items-center space-x-2 px-4">
        <GoBack />
      </div>
      <div class="flex-grow py-14 m-4 max-w-screen-xl">
        <RouterView />
      </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import GoBack from './components/GoBack.vue'; 
import { useBlogStore } from './stores/blogStore'

const blogStore = useBlogStore()
const { fetchBlogs, fetchTopics} = blogStore

fetchBlogs()
fetchTopics()

</script>

