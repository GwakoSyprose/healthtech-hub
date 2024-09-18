<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Add Blog</h1>
      <form @submit.prevent="submitBlog" class="space-y-4">
        <input v-model="name" type="text" placeholder="Name" class="border p-2 w-full" />
        <input v-model="surname" type="text" placeholder="Surname" class="border p-2 w-full" />
        <select v-model="topic" class="border p-2 w-full">
          <option value="">Select Topic</option>
          <option v-for="topic in topics" :key="topic" :value="topic">{{ topic }}</option>
        </select>
        <input v-model="subject" type="text" placeholder="Subject" class="border p-2 w-full" />
        <textarea v-model="body" placeholder="Blog Body" class="border p-2 w-full"></textarea>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2">Submit Blog</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
//   import { useBlogStore } from '../store/blogStore';
  
//   const blogStore = useBlogStore();
//   const { topics, addBlog } = blogStore;
  
  const name = ref('');
  const surname = ref('');
  const topic = ref('');
  const subject = ref('');
  const body = ref('');
  
  const submitBlog = () => {
    const blog = {
      name: name.value,
      surname: surname.value,
      topic: topic.value,
      subject: subject.value,
      body: body.value,
    };
    addBlog(blog);
  };
  </script>
  