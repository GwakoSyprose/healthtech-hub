<template>
    <div class="px-4 py-6">
      <h1 class="text-2xl font-normal mb-2">Add new Post</h1>
      <h4 class="text-neutral-primary text-sm mb-6">{{ todayDate }}</h4>

      <form @submit.prevent="submitBlog" class="space-y-4">
        <input v-model="name" type="text" placeholder="Name" class="border p-2 w-full" />
        <input v-model="surname" type="text" placeholder="Surname" class="border p-2 w-full" />
        <select v-model="topic" class="border p-2 w-full">
          <option value="">Select Topic</option>
          <option v-for="topic in topics" :key="topic.id" :value="topic.id">{{ topic.title }}</option>
        </select>
        <input v-model="subject" type="text" placeholder="Subject" class="border p-2 w-full" />
        <textarea v-model="body" placeholder="Blog Body" class="border p-2 w-full"></textarea>
        <button type="submit" class="bg-brand-primary hover:bg-brand-primary-hover text-brand-onprimary px-6 py-2 rounded-full">Add a Post</button>
      </form>

      <!-- <div class="mt-4">
      <h2 class="text-xl font-semibold">Add Topic</h2>
      <input v-model="newTopicTitle" type="text" placeholder="New Topic Title" class="border p-2 w-full mt-2" />
      <button @click="addNewTopic" class="bg-green-500 text-white px-4 py-2 mt-2">Add Topic</button>
    </div> -->

    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useBlogStore } from '../stores/blogStore'
  import { format } from 'date-fns'
  
  const blogStore = useBlogStore()
  const { topics, addBlog , addTopic, fetchTopics, errorMessage } = blogStore
  
  const name = ref('')
  const surname = ref('')
  const topic = ref('')
  const subject = ref('')
  const body = ref('')
  const newTopicTitle = ref('')

  // Fetch topics when component is created
  fetchTopics()

  
  const submitBlog = () => {
    const blog = {
      name: name.value,
      surname: surname.value,
      topic_id: topic.value,
      subject: subject.value,
      body: body.value,
    }

    //addBlog(blog)
  }

  const addNewTopic = () => {
    if (newTopicTitle.value.trim()) {
        addTopic(newTopicTitle.value)
        newTopicTitle.value = ''
    }
  }

  const todayDate = computed(() => {
    const date = new Date()
    return format(date, 'dd/MM/yyyy')
  });

  </script>
  