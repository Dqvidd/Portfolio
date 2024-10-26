<template>
  <div class="relative min-h-screen w-full bg-black">
    <!-- Background -->
    <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>

    <!-- Contenido -->
    <Header class="z-10" />
    <div class="flex flex-col md:flex-row z-10">
      <Sidebar class="z-10" />
      <main class="flex-1 p-8 z-10">
        <router-view /> <!-- Aquí se renderizarán los componentes según la ruta activa -->
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './HeaderComponent.vue';
import Sidebar from './SidebarComponent.vue';
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
</style>
