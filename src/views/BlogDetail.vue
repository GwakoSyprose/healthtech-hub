<template>
    <div class="px-4 py-6">
        <h1 class="text-2xl font-semibold mb-6">{{ selectedBlog.subject }}</h1>

        <div class="flex items-center space-x-2 text-neutral-primary text-sm mb-4">
            <p>{{ formatDate(selectedBlog.created_at) }}</p>
            <span>|</span>
            <p>{{ selectedBlog.name }} {{ selectedBlog.surname }}</p>
        </div>
        <p class="text-lg">{{ selectedBlog.body }}</p>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useBlogStore } from '../stores/blogStore'
import { format } from 'date-fns'
import { useRoute } from 'vue-router'

const route = useRoute()
const blogStore = useBlogStore()

const { blogs, selectedBlog } = storeToRefs(blogStore)
const { setCurrentBlog, fetchBlogs } = blogStore


fetchBlogs()

setCurrentBlog(route.params.id)

const formatDate = (dateString) => {
    const date = new Date(dateString)
    return format(date, 'dd/MM/yyyy')
}

</script>
