<template>
  <header class="navbar">
    <div class="navbar-content">
      <div>
        <RouterLink to="/"><img class="logo" src="@/assets/logo.svg" alt="logo"/></RouterLink>
      </div>
      <nav>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
        <RouterLink class="nav-link" to="/skills">Skills</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center; /* Centre le contenu de la navbar */
  align-items: center;
  overflow: hidden;
  color: var(--color-text);
  padding: 0 20px; /* Ajoutez un peu de padding autour des éléments de la navbar */
  width: 100%;
  z-index: 1000;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

.nav-link:hover::before {
  width: 100%;
  left: 0;
}

nav {
  display: flex; /* Assurez-vous que les liens sont alignés horizontalement */
  align-items: center; /* Aligner verticalement les liens de navigation */
}

.logo {
  max-width: 100px; /* Définissez la largeur maximale */
  max-height: 50px; /* Définissez la hauteur maximale */
  width: auto; /* Conservez les proportions */
  height: auto; /* Conservez les proportions */
  position: absolute;
  top: 0;
}
</style>