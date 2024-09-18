<template>
    <div class="flex min-h-screen justify-between">
      <!-- Sidebar -->
    <Sidebar />
        
    <!-- Main Content -->
    <main class="w-full p-4 bg-brand-tertiary">
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-white rounded-large">
        <RouterView />
      </div>
     
    </main>
  
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Sidebar from './components/Sidebar.vue'

</script>

