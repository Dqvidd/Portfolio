<template>
  <div class="layout relative min-h-screen w-full overflow-hidden">
    <!-- Infinite Moving Background -->
    <div class="absolute inset-0 z-0">
      <div class="infinite-background"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <Header />
      <div class="flex flex-col md:flex-row">
        <Sidebar />
        <main class="flex-1 p-8">
          <router-view /> <!-- Components will be rendered here based on the active route -->
        </main>
      </div>
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

.layout {
  background-image: url('./assets/bg-dark.jpg'); /* Solo bg-dark.jpg */
  background-size: 25%;
  background-repeat: repeat;
  animation: bg-loop 60s linear infinite;
  min-height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.infinite-background {
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200%;
}

@keyframes bg-loop {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100vh;
  }
}

@media screen and (max-width: 768px) {
  .layout {
    background-size: 75%;
  }

  @keyframes bg-loop {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 1000% 100vh;
    }
  }
}
</style>
