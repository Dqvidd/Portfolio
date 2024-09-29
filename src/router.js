import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/ProjectsLayout.vue';
import Blog from './components/BlogeLayout.vue'; // Asegúrate de tener este componente

const routes = [
  { path: '/', component: AboutMe }, // Esta es la ruta de inicio
  { path: '/projects', component: Projects },
  { path: '/blog', component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
