<template>
    <div class="px-4 py-6">

        <h1 class="text-2xl font-normal mb-6">Blog Posts</h1>

        <!-- Topic Filter Buttons -->
        <div class="flex flex-wrap gap-2 mb-6">
            <button v-for="topic in topics" :key="topic.id" :class="[
                'flex items-center px-4 py-2 border rounded-lg text-sm font-medium transition-colors',
                selectedTopicIDs.includes(topic.id) ? 'bg-brand-secondary text-brand-onsecondary ' : 'bg-white text-neutral-primary border-neutral-secondary'
            ]" @click="toggleTopic(topic.id)">
                <template v-if="selectedTopicIDs.includes(topic.id)">
                    <CheckIcon class="w-4 h-4 mr-1" />
                </template>
                {{ topic.title }}
            </button>
        </div>

        <!-- Blog posts -->
        <div v-if="blogs.length === 0" class="text-gray-500">No blogs available</div>
        <div v-else>
            <div v-for="blog in filteredBlogs" :key="blog.id" class="border-b border-gray-200 pb-4 mb-6">
                <div class="flex justify-between items-center">
                    <div class="flex-grow">
                        <h3 class="text-black text-lg">{{ blog.subject }}</h3>
                        <h4 class="text-neutral-primary text-sm">{{ formatDate(blog.created_at) }}</h4>
                    </div>
                    <span class="ml-4 flex items-center">
                        <ArrowRightIcon class="w-6 h-6 text-gray-600" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowRightIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { useBlogStore } from '../stores/blogStore'
import { ref, computed } from 'vue'
import { format } from 'date-fns'

const blogStore = useBlogStore()
const { blogs, fetchBlogs, topics, fetchTopics, setFilter, errorMessage } = blogStore

const selectedTopicIDs = ref([])

fetchBlogs()
fetchTopics()

const toggleTopic = (topicId) => {
    const index = selectedTopicIDs.value.indexOf(topicId)
    if (index > -1) {
        selectedTopicIDs.value.splice(index, 1); //remove if found
    } else {
        selectedTopicIDs.value.push(topicId)
    }

    setFilter(selectedTopicIDs.value);
}

const filteredBlogs = computed(() => {
    return blogStore.filteredBlogsByTopic;
});

const formatDate = (dateString) => {
    const date = new Date(dateString)
    return format(date, 'dd/MM/yyyy')
}

</script>
