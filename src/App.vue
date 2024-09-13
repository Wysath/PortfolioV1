<script setup>
  import Navbar from './components/Navbar.vue'
  import skills from './components/skills.vue'
  import presentation from './components/presentation.vue';
  import projets from './components/projets.vue';
  import about from './components/about.vue'
  import contact from './components/contact.vue'
  import footerLouna from './components/footerLouna.vue'
</script>

<template>
    <div>
        <Navbar />
        <presentation/>
        <projets/>
        <skills/>
        <about/>
        <contact/>
        <footerLouna/>
    </div>
</template>

