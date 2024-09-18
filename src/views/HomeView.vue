<template>
  <div class="flex flex-col items-center justify-center h-full text-center space-y-4">
    <!-- Welcome Heading -->
    <h1 class="text-4xl font-bold text-gray-800">Welcome to Pocket Clinic Blog!</h1>
    
    <!-- Brief Description -->
    <p class="text-lg text-gray-600 max-w-2xl">
      Discover the latest in digital health and medical advancements. Explore our blog to read informative articles, 
      or add your own content to share your insights with the community.
    </p>

    <!-- Call to Action -->
    <div class="space-x-4">
      <RouterLink to="/news" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Blogs
      </RouterLink>
      <RouterLink to="/add-blog" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Add a Blog
      </RouterLink>
    </div>

    <!-- Additional Links or Info -->
    <p class="text-gray-500 text-sm mt-6">Stay updated with the latest news or reach out to our support team for help.</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* You can customize styles for specific components or leave the default Tailwind styling */
</style>
