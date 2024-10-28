<template>
  <div id="app">
    <Navbar />
    <section id="presentation">
      <Presentation />
    </section>
    <section id="projets">
      <Projets />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <FooterLouna />
  </div>
</template>



<script setup>
import Navbar from './components/Navbar.vue';
import Projets from './components/projets.vue';
import Skills from './components/skills.vue';
import About from './components/about.vue';
import Contact from './components/contact.vue';
import FooterLouna from './components/footerLouna.vue';
import Presentation from './components/presentation.vue';
import router from './router';
</script>
