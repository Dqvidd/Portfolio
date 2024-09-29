<template>
  <section class="max-w-6xl">
    <h2 class="text-4xl mb-8 text-center font-bold">Stories</h2>
    <div class="border border-white p-4">
      <div v-for="(story, index) in stories" :key="index" class="flex justify-between items-center mb-2 hover:bg-gray-800 p-2">
        <span>{{ story.title }}</span>
        <span>{{ (index + 1).toString().padStart(2, '0') }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const stories = [
  { title: 'My Programming Story' },
  { title: 'Bla Bla Bla' }
]
</script>