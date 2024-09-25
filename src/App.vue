<template>
  <div class="flex min-h-screen">

    <Sidebar :isSidebarOpen="isSidebarOpen" :closeSidebarOnItemClick = "closeSidebarOnItemClick" />
 
    <main class="flex-1 p-4 lg:p-10 bg-brand-tertiary">
    <div class="relative min-h-full sm:p-1 lg:p-8 md:p-6 2xl:p-6 bg-white rounded-large flex flex-col">   
      <div class="absolute top-10 left-6 lg:m-4 flex items-center space-x-2 px-4">
        <GoBack v-if="!isHome" />
      </div>
      <MenuButton :toggleSidebar="toggleSidebar" />
      <div class="flex-grow py-14 m-4 max-w-screen-xl">
        <RouterView />
      </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import GoBack from './components/GoBack.vue' 
import MenuButton from './components/MenuButton.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebarOnItemClick = () => {
  if (isSidebarOpen.value) {
    isSidebarOpen.value = false
  }
}
const route = useRoute()

const isHome = ref(route.path === '/')

// Watch for route changes and update `isHome`
watch(() => route.path, (newPath) => {
  isHome.value = newPath === '/'
})

</script>

