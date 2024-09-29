<template>
  <div class="text-white min-h-screen font-mono">
    <Header />
    <div class="flex flex-col md:flex-row">
      <Sidebar />
      <main class="flex-1 p-8">
        <router-view /> <!-- Aquí se renderizarán los componentes según la ruta activa -->
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './HeaderComponent.vue';
import Sidebar from './SidebarComponent.vue';
</script>
