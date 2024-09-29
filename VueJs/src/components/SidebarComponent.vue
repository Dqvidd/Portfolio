<template>
  <aside class="w-64 p-4">
    <div class="border mt-6 p-2 mb-4">
      <h2 class="font-bold mb-2">Filesystem</h2>
      <ul>
        <li v-for="item in menuItems" :key="item">
          <a href="#" class="text-gray-300 hover:text-white">{{ item }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
const menuItems = ['Home', 'About', 'Music', 'Games', 'Projects']
</script>
