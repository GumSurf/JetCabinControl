function loadHeader() {
    const headerHTML = `
        <div class="logo">JetCabinControl</div>
        <div class="user-info">
            <span>Utilisateur: John Doe</span>
            <button class="logout-btn">Déconnexion</button>
        </div>
    `;
    document.querySelector('header').innerHTML = headerHTML;
}

function loadFooter() {
    const footerHTML = `
        <p>&copy; 2024 JetCabinControl. Tous droits réservés.</p>
    `;
    document.querySelector('footer').innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
