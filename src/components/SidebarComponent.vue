<template>
  <aside class="w-60 p-4 mx-auto">
    <div class="border mt-6 p-2 mb-4">
      <h2 class="text-4xl font-bold mb-4 mt-2 text-center">/root</h2>
      <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="flex items-center mb-2 text-2xl ml-1 hover:text-gray-500"
        >
          <i :class="item.icon" class="mr-2"></i>
          <router-link :to="item.path" class="">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
const menuItems = [
  { name: 'About Me', icon: 'fas fa-user-astronaut', path: '/' },
  { name: 'Ejercicios', icon: 'fas fa-floppy-disk', path: '/ejercicios' },
  { name: 'Blog', icon: 'fa-solid fa-blog', path: '/blog' }
];
</script>


