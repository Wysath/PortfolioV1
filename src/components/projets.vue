<template>
    <div class="projects">
        <h2>Mes Projets</h2>
        <br>
        <div class="items">
            <div class="project-items"v-for="(project, index) in projects">
                <h2>{{ project.title }}</h2>
                <p>{{ project.year }}</p>
                <p>Technologies utilisées : {{ project.technologies }}</p>
                <p>{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { title: 'Portfolio', year: '2024', technologies: 'Vue.JS, CSS, JavaScript', description: 'Réalisation de mon portfolio profesionnel' },
                { title: 'Cross-Browser Project', year: '2024 - Maintenant ', technologies: 'HTML, CSS, JavaScript', description: 'Outil permetant de vérifier la comptabilité des sites web avec tous les navigateurs web' },
            ]
        };
    }
};
</script>

<style scoped>

.projects {
  display: flex;
  flex-direction: column;
}

h2 {
    color: var(--vt-c-primary-color);
    text-align: center;
    margin-bottom: 25px;
}

.items{
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 100px;
}

.project-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50vh;
    min-height: 20vh;
    height: fit-content;
    border: 1px solid var(--vt-c-primary-color);
    border-radius: 25px;
    padding: 15px;
    margin: 10px;
    transition: transform 750ms ;

    &:hover {
        h2{
            color: var(--vt-c-white);
        }
        background-color: var(--vt-c-primary-color);
        color: white;
        animation: fadeIn 2s ease-in forwards;
        transform: translateY(-30px);
    }
}



.fade-in {
    opacity: 0;
    animation: fadeIn 2s ease-in forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
</style>