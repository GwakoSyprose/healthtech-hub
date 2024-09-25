<template>

    <button @click="goBack" class="flex items-center text-gray-500 hover:text-gray-800 cursor-pointer">
        <ArrowLeftIcon class="w-6 h-6 text-black" />
        <span class="ml-2 text-lg text-black">Back</span>
    </button>

</template>

<script setup>
import { useRouter } from 'vue-router'
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

function goBack() {
  router.back()  
}

</script>