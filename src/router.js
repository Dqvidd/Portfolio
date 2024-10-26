import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/EjerciciosLayout.vue';
import Ejercicio1 from './components/Ejercicios/ELF x86 - Fake Instructions.vue'; // Importar el componente del ejercicio 1
// Importa más ejercicios según sea necesario

const routes = [
  { path: '/', component: AboutMe },
  { path: '/ejercicios', component: Projects },
  { path: '/ejercicio/1', component: Ejercicio1 }, // Ruta para el Ejercicio 1
  // Agrega más rutas para otros ejercicios aquí
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
