<template>
    <div class="contact-container">
        <h1>Me contacter</h1>
        <div class="contact-info">
            <p>
                <i class="fas fa-envelope"></i>
                Vous pouvez me contacter par mail à l'adresse suivante : 
                <a href="mailto: louna.petitfils@gmail.com"> louna.petitfils@gmail.com</a>
            </p>
            <p>
                <i class="fas fa-phone"></i>
                Vous pouvez également me contacter par téléphone au 06 12 34 56 78
            </p>
        </div>
        <div class="social">
            <a href="https://www.linkedin.com/in/louna-petitfils/"  target="_blank" rel="noopener noreferrer">
                <img src="../assets/images/linkedin.png" class="social-media" alt="Logo LinkedIn" />
            </a>
            <a href="https://github.com/wysath"  target="_blank" rel="noopener noreferrer">
                <img src="../assets/images/github.png" class="social-media" alt="Logo GitHub" />
            </a>
        </div>
    </div>
</template>

<style scoped>
.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    background-color: #f9f9f9;
}

h1 {
    color: var(--vt-c-primary);
    margin-bottom: 20px;
}

.contact-info {
    text-align: left;
    margin-bottom: 20px;
}

.contact-info p {
    margin-bottom: 20px;
    font-size: 1.2em;
    display: flex;
    align-items: left;
    justify-content: left;
}

.contact-info i {
    margin-right: 10px;
    color: var(--vt-c-primary-color);
}

a {
    color: var(--vt-c-primary-color);
    text-decoration: none;
}


.social {
    display: flex;
    justify-content: left;
    margin-top: 20px;
}

.social a {
    margin: 0 10px;
}

.social img {
    width: 50px;
    height: 50px;

    &:hover {
        transform: scale(1.1);
    }
}

</style>