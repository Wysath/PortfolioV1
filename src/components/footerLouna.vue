<template>
    <footer>
        <div class="footer">
            <div class="footer-content">
                <p class="copyright">© 2024 - Louna Petitfils</p>
                <p class="copyright-texte">Site réalisé avec ♥</p>
            </div>
        </div>
    </footer>
</template>

<style scooped>
    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--vt-c-primary-color);
        color: var(--color-text);
        padding: 20px;
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1200px;
    }

    .copyright {
        color: var(--vt-c-white);
        font-size: 16px;
    }

    .copyright-texte {
        font-size: 16px;
        color: var(--vt-c-white);
    }

</style>