<template>
  <section class="max-w-6xl">
    <h2 class="text-4xl mb-8 text-center font-bold">Projects</h2>
    <div class="border border-white p-4">
      <ul>
        <li v-for="(projectname, index) in projects" :key="index" class="flex justify-between items-center mb-2 hover:bg-gray-600 p-2">
          <a href="#" class="cursor-pointer">{{ projectname.title }}</a>
          <a class="cursor-pointer">{{ (index + 1).toString().padStart(2, '0') }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const projects = [
  { title: 'First project' },
  { title: 'Second project' },
  { title: 'Third project' },
  { title: 'Fourth project' },
]
</script>
