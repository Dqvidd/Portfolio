<template>
  <section class="max-w-6xl mx-auto p-8">
    <h2 class="text-5xl mb-12 text-center font-bold text-white">Ejercicios</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div 
        v-for="ejercicio in ejercicios" 
        :key="ejercicio.id" 
        class="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <router-link :to="`/ejercicio/${ejercicio.id}`" class="block h-full">
          <div class="h-40 relative overflow-hidden" :class="ejercicio.gradientClass">
            <svg class="absolute inset-0 w-full h-full text-white opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path :d="ejercicio.icon" />
            </svg>
          </div>
          <div class="p-6 bg-gray-800 bg-opacity-30 backdrop-blur-sm">
            <h3 class="text-xl font-bold text-white mb-2">{{ ejercicio.titulo }}</h3>
            <p class="text-gray-300 text-sm mb-4">{{ ejercicio.descripcion }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in ejercicio.tags" :key="tag" class="px-2 py-1 text-xs font-semibold text-white bg-white/10 rounded-full">
                {{ tag }}
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const ejercicios = ref([
  { 
    id: 1, 
    titulo: 'ELF x86 - Fake Instructions', 
    descripcion: 'Algunas instrucciones falsas. Compilado con GCC 4.3.2 en Xubuntu 8.04. Proc : 32bits x86.',
    icon: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M13 2v7h7',
    gradientClass: 'bg-gradient-to-br from-pink-500 to-purple-500',
    tags: ['IDA', 'GDB', 'Assembly']
  },
  { 
    id: 2, 
    titulo: 'ELF C++ - 0 protection', 
    descripcion: 'Encuentra la contraseña de validación.',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    gradientClass: 'bg-gradient-to-br from-blue-500 to-teal-500',
    tags: ['IDA', 'GDB', 'Assembly']
  },
  { 
    id: 3, 
    titulo: 'PE x86 - 0 protection', 
    descripcion: 'Recupera la contraseña para validar este desafío.',
    icon: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
    gradientClass: 'bg-gradient-to-br from-orange-500 to-red-500',
    tags: ['IDA', 'GDB', 'Assembly']
  },
  // Agrega más ejercicios según sea necesario
]);
</script>

<style scoped>
body {
  background-color: #000;
  color: #fff;
}
</style>