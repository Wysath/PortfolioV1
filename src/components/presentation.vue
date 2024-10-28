<template>
  <div class="presentation">
    <div class="background" ref="canvasWrapper">
      <canvas ref="canvas"></canvas>
    </div>
    <div class="text-container">
      <h1 class="titre-presentation">Louna Petitfils</h1>
      <h2 class="titre">Développeuse web</h2>
      <h2 class="texte-presentation"> Votre vision, mon expertise : je crée des sites web uniques et personnalisés</h2>
      <br>
      <button @click="scrollToContact" class="btn">Contactez-moi</button>
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
  overflow: hidden;
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

.titre{
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: 400;
}

.btn{
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: var(--vt-c-white);
  color: var(--vt-c-back);
  border: 1px solid var(--vt-c-primary-color);
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: var(--vt-c-secondary-color);
    border: 1px solid var(--vt-c-secondary-color);
    color: var(--vt-c-white);
  }

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

<script>
import { RouterLink } from 'vue-router';

export default {

  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      circles: [] 
    };
  },
  methods: {

    scrollToContact() {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    },

    setupCanvas() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      const wrapper = this.$refs.canvasWrapper;
      canvas.width = wrapper.offsetWidth;
      canvas.height = wrapper.offsetHeight;

      //console.log('Canvas dimensions:', canvas.width, canvas.height);

      window.addEventListener("mousemove", (event) => {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        //console.log('Mouse position:', this.mouseX, this.mouseY);
      });

      for (let i = 0; i < 50; i++) {
        const circle = this.createCircle(canvas);
        this.circles.push(circle);
        //console.log('Created circle:', circle);
      }

      this.animate(ctx, canvas);
    },
    createCircle(canvas) {
      const radius = Math.random() * 10 + 5;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: radius,
        color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`,
        velocityX: (Math.random() - 0.5) * 2,
        velocityY: (Math.random() - 0.5) * 2
      };
    },
    animate(ctx, canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.circles.forEach((circle) => {
        circle.x += circle.velocityX;
        circle.y += circle.velocityY;

        if (circle.x > canvas.width || circle.x < 0) circle.velocityX *= -1;
        if (circle.y > canvas.height || circle.y < 0) circle.velocityY *= -1;

        const distX = circle.x - this.mouseX;
        const distY = circle.y - this.mouseY;
        const dist = Math.sqrt(distX * distX + distY * distY);
        const maxDist = 200;
        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          circle.x += distX * force * 0.05;
          circle.y += distY * force * 0.05;
        }

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });

      requestAnimationFrame(() => this.animate(ctx, canvas));
    }
  },
  mounted() {
    this.setupCanvas();
  }
};
</script>

<style scoped>
.background {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
canvas {
  display: block;
}
</style>