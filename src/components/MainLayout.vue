<template>
  <div class="text-white min-h-screen font-mono">
    <Header />
    <div class="flex flex-col md:flex-row">
      <Sidebar />
      <main class="flex-1 p-8">
        <AboutMe />
        <Stories />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './HeaderComponent.vue'
import Sidebar from './SidebarComponent.vue'
import AboutMe from './AboutMe.vue'
import Stories from './ProjectsComponent.vue'
</script>