<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="navbar">
    <div class="navbar-content">
      <div class="logo-container">
        <img class="logo" src="../assets/images/Logo.png" alt="logo"/>
      </div>
      <button class="hamburger" @click="toggleMenu">
        <span class="hamburger-icon"></span>
      </button>
      <nav :class="['nav-links', { 'nav-links-open': isMenuOpen }]">
        <a href="#presentation" class="nav-link">Accueil</a>
        <a href="#projets" class="nav-link">Projets</a>
        <a href="#skills" class="nav-link">Compétences</a>
        <a href="#about" class="nav-link">À propos</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
</template>


<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: var(--color-text);
  padding: 0 20px;
  width: 100%;
  z-index: 1000;
  background-color: var(--vt-c-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  align-items: center;
  margin-left: auto; /* Pousse les liens de navigation à droite */
}

.nav-link {
  display: block;
  color: var(--vt-c-primary-color);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--vt-c-secondary-color);
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover {
  color: var(--vt-c-secondary-color);
}

.nav-link:hover::before {
  width: 100%;
  left: 0;
}

.logo {
  max-width: 100px;
  max-height: 50px;
  width: auto;
  height: auto;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto; /* Ajoutez cette ligne pour pousser l'icône hamburger à droite */
}

.hamburger-icon {
  width: 100%;
  height: 3px;
  background-color: var(--vt-c-primary-color);
  position: relative;
  transition: background-color 0.3s ease;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: var(--vt-c-primary-color);
  transition: transform 0.3s ease;
}

.hamburger-icon::before {
  transform: translateY(-8px);
}

.hamburger-icon::after {
  transform: translateY(8px);
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-height: 0;
    overflow: hidden;
  }

  .nav-links-open {
    max-height: 300px; /* Ajustez cette valeur en fonction du nombre de liens */
  }

  .nav-link {
    width: 100%;
    text-align: left;
    padding: 10px 20px;
  }

  .hamburger {
    display: flex;
  }
}
</style>