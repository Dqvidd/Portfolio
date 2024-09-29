<template>
  <header class="p-4 flex justify-between items-center border-b">
    <h1 class="text-4xl font-bold">Dqvidd</h1>
    <div class="flex space-x-4">
      <a href="#" class="text-gray-300 hover:text-white">
        <GithubIcon class="w-6 h-6" />
      </a>
      <a href="#" class="text-gray-300 hover:text-white">
        <TwitterIcon class="w-6 h-6" />
      </a>
      <a href="#" class="text-gray-300 hover:text-white">
        <DiscordIcon class="w-6 h-6" />
      </a>
      <select class="text-white px-2 py-1 rounded">
        <option>es</option> <!-- Idea de poner selector de idiomas o selector de modo claro/oscuro -->
      </select>
    </div>
  </header>
</template>

<script setup>
import { GithubIcon, TwitterIcon } from 'lucide-vue-next'
import DiscordIcon from './icons/DiscordIcon.vue'
</script>

<style scoped>
</style>
