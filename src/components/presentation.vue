<template>
  <div class="presentation">
    <div class="background-circles">
      <div class="circle circle1" offset-hover-max="0.7" offset-hover-min="0.5"></div>
      <div class="circle circle2" offset-hover-max="0.7" offset-hover-min="0.5"></div>
      <div class="circle circle3" offset-hover-max="0.7" offset-hover-min="0.5"></div>
    </div>

    <div class="text-container">
      <h1 class="titre-presentation">Louna Petitfils</h1>
      <h2 class="texte-presentation">Développeuse web junior</h2>
    </div>
  </div>
</template>

<style>
.presentation {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: #f0f0f0; 
  overflow: hidden; /* Pour cacher les parties des cercles qui dépassent */
}

.background-circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; 
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(184, 122, 241, 0.5), rgba(255, 209, 149, 0.5));
  animation: move 10s infinite alternate;
  transition: transform 0.3s ease;
  filter: blur(1.5rem);
}

.circle1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 20%;
}

.circle2 {
  width: 400px;
  height: 400px;
  top: 50%;
  left: 60%;
}

.circle3 {
  width: 200px;
  height: 200px;
  top: 70%;
  left: 30%;
}

.text-container {
  position: relative;
  z-index: 1;
}

.titre-presentation {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.texte-presentation {
  font-size: 1.5rem;
  position: relative;
  display: inline-block;
}

.texte-presentation::before {
  content: '';
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  height: 0.5em;  
  background-color: var(--vt-c-secondary-color);
  z-index: -1;
  animation: highlight 2s ease-in-out forwards;
  opacity: 0.3;
}

@keyframes highlight {
  0% {
    width: 0;
    left: 0;
  }
  100% {
    width: 100%;
    left: 0;
  }
}
</style>