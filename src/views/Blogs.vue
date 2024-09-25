<template>
    <div class="px-4 py-6">

        <h1 class="text-2xl font-normal mb-6">Blog Posts</h1>

        <div v-if="error" class="text-error-primary mb-4 p-2 bg-error-secondary"> {{ error }}</div>

        <div :class="{ 'opacity-40 pointer-events-none': loading }">
            <!-- Topic Filter Buttons -->
            <div class="flex flex-wrap gap-2 mb-6">
                <button v-for="topic in topics" :key="topic.id" :class="[
                    'flex items-center px-4 py-2 border rounded-lg text-sm font-medium transition-colors',
                    topicFilterIDs.includes(topic.id) ? 'bg-brand-secondary text-brand-onsecondary ' : 'bg-white text-neutral-primary border-neutral-secondary'
                ]" @click="toggleTopic(topic.id)">
                    <template v-if="topicFilterIDs.includes(topic.id)">
                        <CheckIcon class="w-4 h-4 mr-1" />
                    </template>
                    {{ topic.title }}
                </button>
            </div>

            <div v-if="blogsFilteredByTopic.length === 0" class="text-gray-500">No blogs available</div>
             <!-- Blog posts -->
            <div v-for="blog in blogsFilteredByTopic" :key="blog.id" class="border-b border-gray-200 pb-4 mb-6">
                <div class="flex justify-between items-center">
                    <div class="flex-grow">
                        <h3 class="text-black text-lg">{{ blog.subject }}</h3>
                        <h4 class="text-neutral-primary text-sm">{{ formatDate(blog.created_at) }}</h4>
                    </div>
                    <span class="ml-4 flex items-center">
                        <RouterLink :to="`/blogs/${blog.id}`">
                            <ArrowRightIcon class="w-6 h-6 text-gray-600" />
                        </RouterLink>
                    </span>
                </div>
            </div>
     </div>

        <!-- Show loading spinner when loading is true -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-5 z-10">
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-brand-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>

    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { ArrowRightIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { getTopics, getBlogs } from '@/api'
import { useBlogStore } from '../store/blogStore'
import { format } from 'date-fns'

const blogStore = useBlogStore()

const { topics, topicFilterIDs, blogsFilteredByTopic } = storeToRefs(blogStore)
const { toggleTopic } = blogStore

const loading = ref(true)
const error = ref(null)

onMounted(async () => {

  const topicsRes = await getTopics()  

  if (!topicsRes.success) {
    error.value = "Error getting topics: " + topicsRes.error
    loading.value = false
    return
  }

  blogStore.setTopics(topicsRes.data)

  const blogsRes = await getBlogs()

  if (!blogsRes.success) {
    error.value = "Error getting blogs: " + blogsRes.error
    loading.value = false
    return
  }

  blogStore.setBlogs(blogsRes.data)
  loading.value = false
})

const formatDate = (dateString) => {
    const date = new Date(dateString)
    return format(date, 'dd/MM/yyyy')
}

</script>
