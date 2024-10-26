<template>
  <section class="max-w-6xl mr-auto">
      <h2 class="text-7xl mb-12 text-center font-bold border-b border-white pb-4">Ejercicios</h2>
      <div class="border border-white p-4 mb-8 min-h-[300px] flex flex-col md:flex-row items-start justify-center">
          <div 
              v-for="ejercicio in ejercicios" 
              :key="ejercicio.id" 
              class="border border-gray-300 rounded-lg shadow-lg m-2 p-4 w-60 h-40 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out bg-transparent"
          >
              <router-link :to="`/ejercicio/${ejercicio.id}`" class="text-center text-xl font-semibold">
                  {{ ejercicio.titulo }}
              </router-link>
          </div>
      </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const ejercicios = ref([
  { id: 1, titulo: 'ELF x86 - Fake Instructions' },
  // Agrega más ejercicios según sea necesario
]);
</script>

<style scoped>
.cursor-pointer:hover {
  background-color: #e2e8f0; /* Cambia el color al pasar el ratón */
}
</style>
