<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Main Content -->
    <main class="flex-1 p-10 bg-brand-tertiary">
    <div class="relative min-h-full lg:p-8 md:p-6 2xl:p-6 bg-white rounded-large flex flex-col">
        
     <div class="absolute top-10 left-6 lg:m-4 flex items-center space-x-2 px-4">
          <RouterLink to="back" @click.native="goBack" class="flex items-center text-gray-500 hover:text-gray-800 cursor-pointer">
            <ArrowLeftIcon class="w-6 h-6 text-black" />
            <span class="ml-2 text-lg text-black">Back</span>
          </RouterLink>

      </div>
        
        <!-- Content -->
        <div class="flex-grow py-14 m-4 max-w-screen-xl">
          <RouterView />
        </div>

      </div>
    </main>
  
  </div>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'; 

const router = useRouter();

function goBack() {
  router.back();  
}
</script>

