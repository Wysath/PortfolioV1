<template>
  <h2>Mes compétences</h2>
    <main class="container">
        <div class="sidebar">
            <button @click="switchComponent('Back')">Back</button>
            <button @click="switchComponent('Front')">Front</button>
            <button @click="switchComponent('SoftSkills')">Soft Skills</button>
        </div>
        <div class="content">
            <component :is="currentComponent"></component>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Back from './listSkills/back.vue';
import Front from './listSkills/front.vue';
import SoftSkills from './listSkills/softSkills.vue';

const components = {
  Back,
  Front,
  SoftSkills
};

const currentComponent = ref(components.Back);

function switchComponent(componentName) {
  currentComponent.value = components[componentName];
}
</script>

<style scoped>

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: var(--vt-c-primary-color);
}

.container {
  display: flex;
  justify-content: center; 
  align-items: center;
  height: auto; 
  max-height: 90vh; 
  max-width: 80vw; 
  margin: 10vh auto; 
  margin-top: 5vh;
  padding: 20px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
}

.sidebar, .content {
  flex: 1; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: stretch; 
  gap: 20px;
  padding: 20px;
  color: var(--vt-c-text-light);
  height: 100%; 
  flex: 1; 
}

.sidebar button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--color-background);
  color: var(--vt-c-primary-color);
  border: 1px solid var(--vt-c-primary-color);
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%; 
  flex: 1; 
  margin: 10px 0; 

  &:hover{
    background-color: var(--vt-c-primary-color);
    color: var(--color-background);
  }
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  font-size: 1.5rem;
  color: var(--vt-c-text-dark);
  background-color: var(--color-background);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 500px; 
}


</style>