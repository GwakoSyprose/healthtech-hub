<template>

  <div class="px-4 py-6">
    <h1 class="text-2xl font-normal mb-2">Add new Post</h1>
    <h4 class="text-neutral-primary text-sm mb-6">{{ format(todaysDate, 'dd/MM/yyyy') }}</h4>

    <div v-if="error" class="text-error-primary mb-4"> {{ error.message }}</div>
    <div v-if="loading" class="text-gray-500">Loading...</div>

    <form @submit.prevent="submitBlog" class="space-y-4">
      <div>
        <label class="text-neutral-primary" for="name">Name</label>
        <input v-model="blog.name" id="name" type="text"
          class="block w-full px-4 py-2 mt-2 text-black bg-white border border-neutral-tertiary rounded-md focus:border-brand-primary focus:outline-none focus:ring">
      </div>
      <div>
        <label class="text-neutral-primary" for="surname">Surname</label>
        <input v-model="blog.surname" id="surname" type="text"
          class="block w-full px-4 py-2 mt-2 text-black bg-white border border-neutral-tertiary rounded-md focus:border-brand-primary focus:outline-none focus:ring">
      </div>
      <div>
        <label class="text-neutral-primary" for="topic">Select Category</label>
        <select v-model="blog.topic_id"  id="topic"
          class="block w-full px-4 py-3 mt-2 text-black bg-white border border-neutral-tertiary rounded-md focus:border-brand-primary focus:outline-none focus:ring">
          <option value="">Select Topic</option>
          <option v-for="topic in topics" :key="topic.id" :value="topic.id">{{ topic.title }}</option>
        </select>
      </div>
      <div>
        <label class="text-neutral-primary" for="subject">Headline</label>
        <input v-model="blog.subject" id="subject" type="text"
          class="block w-full px-4 py-2 mt-2 text-black bg-white border border-neutral-tertiary rounded-md focus:border-brand-primary focus:outline-none focus:ring">
      </div>
      <div>
        <label class="text-neutral-primary" for="body">Body</label>
        <textarea v-model="blog.body"  id="body" placeholder="max 200 characters" maxlength="400"
          class="block mt-2 w-full px-4 py-2 h-30 placeholder-gray-400/70 text-black bg-white border border-neutral-tertiary rounded-md focus:border-brand-primary focus:outline-none focus:ring"></textarea>
      </div>

      <button type="submit"
        class="bg-brand-primary hover:bg-brand-primary-hover text-brand-onprimary px-6 py-2 rounded-full">Add a
        Post</button>
    </form>

  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref, onMounted} from 'vue'
import { getTopics, postBlog } from '@/api'
import { useBlogStore } from '../store/blogStore'
import { format } from 'date-fns'

const blogStore = useBlogStore()
const { topics, todaysDate } = storeToRefs(blogStore)


const loading = ref(true);
const error = ref(null);

onMounted(async () => {

const response = await getTopics()
  if (!response.success) {
    error.value = response.error;
    loading.value = false;
    return;
  }
  blogStore.setTopics(response.data)
  loading.value = false

})

const blog = ref({
  name: '',
  surname: '',
  topic_id: '',
  subject: '',
  body: ''
})

const submitBlog = async () => {

  if (
    !blog.value.name ||
    !blog.value.surname ||
    !blog.value.topic_id ||
    !blog.value.subject ||
    !blog.value.body
  ) {
    return alert('All fields are required') // TODO: refactor showing error msg
  }

  const response = await postBlog(blog.value)

  if (!response.success) {
    error.value = response.error;
    loading.value = false;
    return;
  }
    blogStore.addBlog(response.data) 
   
    blog.value = {
      name: '',
      surname: '',
      topic_id: '',
      subject: '',
      body: ''
    }
    loading.value = false
    // TODO: blog add success notify
    }

</script>