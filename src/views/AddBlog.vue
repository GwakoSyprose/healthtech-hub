<template>

  <div class="relative px-4 py-6">
    <h1 class="text-2xl font-normal mb-2">Add new Post</h1>
    <h4 class="text-neutral-primary text-sm mb-6">{{ format(todaysDate, 'dd/MM/yyyy') }}</h4>

    <div v-if="error" class="text-error-primary mb-4 p-2 bg-error-secondary"> {{ error }}</div>
    <div v-if="success" class="text-success-primary mb-4 p-2 bg-success-secondary"> {{ success }}</div>

    <div :class="{ 'opacity-40 pointer-events-none': loading }">
      <form @submit.prevent="submitBlog" class="space-y-4">
        <div>
          <label class="text-neutral-primary" for="name">Name</label>
          <input v-model="blog.name" @blur="validateBlog('name')" id="name" type="text"
            class="block w-full px-4 py-2 mt-2 text-black bg-white border border-neutral-tertiary rounded-md focus:border-brand-primary focus:outline-none focus:ring">
          <p v-if="formErrors.name" class="text-error-primary pt-2 ml-2">{{ formErrors.name }}</p>
        </div>
        
        <div>
          <label class="text-neutral-primary" for="surname">Surname</label>
          <input v-model="blog.surname"  @blur="validateBlog('surname')"  id="surname" type="text"
            class="block w-full px-4 py-2 mt-2 text-black bg-white border border-neutral-tertiary rounded-md focus:border-brand-primary focus:outline-none focus:ring">
          <p v-if="formErrors.surname" class="text-error-primary pt-2 ml-2">{{ formErrors.surname }}</p>  
        </div>
        <div>
          <label class="text-neutral-primary" for="topic">Select Category</label>
          <select v-model="blog.topic_id" @blur="validateBlog('topic_id')" id="topic"
            class="block w-full px-4 py-3 mt-2 text-black bg-white border border-neutral-tertiary rounded-md focus:border-brand-primary focus:outline-none focus:ring">
            <option value="">Select Topic</option>
            <option v-for="topic in topics" :key="topic.id" :value="topic.id">{{ topic.title }}</option>
          </select>
          <p v-if="formErrors.topic_id" class="text-error-primary">{{ formErrors.topic_id }}</p>
        </div>
        <div>
          <label class="text-neutral-primary" for="subject">Headline</label>
          <input v-model="blog.subject" @blur="validateBlog('subject')" id="subject" type="text"
            class="block w-full px-4 py-2 mt-2 text-black bg-white border border-neutral-tertiary rounded-md focus:border-brand-primary focus:outline-none focus:ring">
          <p v-if="formErrors.subject" class="text-error-primary pt-2 ml-2">{{ formErrors.subject }}</p> 
        </div>
        <div>
          <label class="text-neutral-primary" for="body">Body</label>
          <textarea v-model="blog.body" @blur="validateBlog('body')" id="body" placeholder="max 250 characters" maxlength="250"
            class="block mt-2 w-full px-4 py-2 h-30 placeholder-gray-400/70 text-black bg-white border border-neutral-tertiary rounded-md focus:border-brand-primary focus:outline-none focus:ring"></textarea>
          <p v-if="formErrors.body" class="text-error-primary pt-2 ml-2">{{ formErrors.body }}</p> 
        </div>
  
        <button type="submit"
          class="bg-brand-primary hover:bg-brand-primary-hover text-brand-onprimary px-6 py-2 rounded-full">Add a Post</button>
      </form>
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
import { getTopics, postBlog } from '@/api'
import { useBlogStore } from '../store/blogStore'
import { format } from 'date-fns'

const blogStore = useBlogStore()
const { topics, todaysDate } = storeToRefs(blogStore)

const loading = ref(true)
const success = ref(false)
const error = ref(null)

const blog = ref({
  name: '',
  surname: '',
  topic_id: '',
  subject: '',
  body: ''
})

const formErrors = ref({
  name: null,
  surname: null,
  topic_id: null,
  subject: null,
  body: null
})

const validateField = (field, value) => {
  switch (field) {
    case 'name':
      return value ? null : 'Name is required'
    case 'surname':
      return value ? null : 'Surname is required'
    case 'topic_id':
      return value ? null : 'Category is required'
    case 'subject':
      return value ? null : 'Headline is required'
    case 'body':
      return value.length <= 250 ? null : 'Body must not exceed 250 characters'
    default:
      return null
  }
}

const validateBlog = (field) => {
  formErrors.value[field] = validateField(field, blog.value[field])
  error.value = null
}

const validateAll = () => {
  let valid = true
  Object.keys(blog.value).forEach(field => {
    const error = validateField(field, blog.value[field])
    formErrors.value[field] = error
    if (error) valid = false
  })
  return valid
}


const submitBlog = async () => {

  if (!validateAll()) {
    error.value = "All fields are required"
    return
  }

  loading.value = true
  const response = await postBlog(blog.value)
  
  if (!response.success) {
    error.value = "Error saving blog: " + response.error
    loading.value = false
    return
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
  success.value = 'Blog added successfully'
}

onMounted(async () => {
  const response = await getTopics()
  if (!response.success) {
    error.value = "Error getting topics: " + response.error
    loading.value = false
    return
  }
  blogStore.setTopics(response.data)
  loading.value = false
})


</script>
