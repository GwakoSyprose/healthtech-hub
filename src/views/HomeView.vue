<template>
  <div class="flex flex-col items-start justify-start h-full space-y-6 px-4 py-6">

    <h1 class="text-4xl font-bold text-black">Welcome to HealthTech Hub Blog!</h1>
   
    <p class="text-lg text-black max-w-screen">
      Discover the latest in digital health and medical advancements. Explore our blog to read informative articles, 
      or add your own content to share your insights with the community.
    </p>

    <div class="space-x-4">
      <RouterLink to="/news" class="bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-2 px-4 rounded">
        View Blogs
      </RouterLink>
      <RouterLink to="/add-blog" class="bg-brand-secondary hover:bg-brand-secondary-hover text-brand-onsecondary font-bold py-2 px-4 rounded">
        Add a Blog
      </RouterLink>
    </div>

    <p class="text-neutral-primary text-sm mt-6">Stay updated with the latest news or reach out to our support team for help.</p>
  </div>
</template>

<script setup>
</script>

