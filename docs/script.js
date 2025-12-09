// On sélectionne le bouton et le corps de la page
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier si l'utilisateur a déjà une préférence enregistrée
const currentTheme = localStorage.getItem('theme');

// Si un thème est sauvegardé, on l'applique
if (currentTheme) {
    body.classList.add(currentTheme);
    // Met à jour l'icône du bouton si nécessaire
    if (currentTheme === 'light-mode') {
        toggleButton.textContent = '🌙'; // Lune pour passer en mode sombre
    }
}

// Écouter le clic sur le bouton
toggleButton.addEventListener('click', () => {
    // Ajouter ou enlever la classe 'light-mode'
    body.classList.toggle('light-mode');

    // Vérifier si la classe est présente pour savoir quel thème est actif
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light-mode'); // Sauvegarder "light-mode"
    } else {
        toggleButton.textContent = '☀️';
        localStorage.removeItem('theme'); // Revenir au défaut (sombre)
    }
});