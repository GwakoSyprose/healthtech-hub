<template>
    <div class="px-4 py-6">

        <h1 class="text-2xl font-normal mb-6">Blog Posts</h1>

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

        <!-- Blog posts -->
        <div v-if="blogsFilteredByTopic.length === 0" class="text-gray-500">No blogs available</div>
        <div v-if="loading" class="text-gray-500">Loading...</div>
        <div v-else>
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
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ArrowRightIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { useBlogStore } from '../stores/blogStore'
import { format } from 'date-fns'

const blogStore = useBlogStore()

const { blogs, topics, topicFilterIDs, blogsFilteredByTopic, errorMessage, loading } = storeToRefs(blogStore)
const { fetchTopics, fetchBlogs, toggleTopic } = blogStore


fetchBlogs()
fetchTopics()

const formatDate = (dateString) => {
    const date = new Date(dateString)
    return format(date, 'dd/MM/yyyy')
}

</script>
