import { createRouter, createWebHistory } from 'vue-router';

import Presentation from '../components/presentation.vue';
import Contact from '../components/contact.vue';
import Skills from '../components/skills.vue';
import Projets from '../components/projets.vue';
import About from '../components/about.vue';

const routes = [
  {
    path: '/presentation',
    name: 'presentation',
    component: Presentation
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/projets',
    name: 'projets',
    component: Projets
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
