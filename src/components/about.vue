<template>
    <div class="about-container">
        <div class="about-content">
            <div class="image-section">
                <img src="../assets/images/louna.jpg" alt="Photo de Louna Petitfils" />
            </div>
            <div class="text-section">
                <h1>Louna Petitfils</h1>
                <p>19 ans, étudiante et alternante en 3ème année de BUT MMI (Métiers du Multimédia et de l'Internet) à Troyes. Je suis actuellement en alternance chez <a href="https://www.fisa.fr/">Fisa Fauconnet Ingenierie</a> en tant que développeuse web. J'ai intégré cette entreprise en septembre 2023 et je suis très heureuse de pouvoir apprendre et évoluer dans ce domaine.</p>
                <p>Je suis passionnée par le développement web et j'ai hâte de pouvoir mettre en pratique mes compétences dans le monde professionnel.</p>
                <p>Je suis à l'écoute de vos besoins et je serai ravie de vous accompagner dans la réalisation de vos projets.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    background-color: #f9f9f9;
}

.about-content {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

.text-section {
    flex: 1;
    padding: 40px;
}

.image-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

h1 {
    color: var(--vt-c-primary);
    margin-bottom: 20px;
}

p {
    margin-bottom: 20px;
    line-height: 1.6;
}

img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}
</style>