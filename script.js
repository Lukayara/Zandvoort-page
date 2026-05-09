function updateThemeButton(isDarkMode) {
    const button = document.querySelector('.theme-toggle');
    if (!button) {
        return;
    }

    button.textContent = isDarkMode ? '☀️' : '🌙';
    button.title = isDarkMode ? 'Wissel naar lichte modus' : 'Wissel naar donkere modus';
    button.setAttribute('aria-label', button.title);
    button.setAttribute('aria-pressed', String(isDarkMode));
}

function getSavedDarkMode() {
    try {
        return localStorage.getItem('darkMode') === 'enabled';
    } catch (error) {
        return false;
    }
}

function saveDarkMode(isDarkMode) {
    try {
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    } catch (error) {
        // The theme still changes even when storage is blocked.
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    updateThemeButton(isDarkMode);
    saveDarkMode(isDarkMode);
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

window.addEventListener('load', function() {
    if (getSavedDarkMode()) {
        document.body.classList.add('dark-mode');
    }
    updateThemeButton(document.body.classList.contains('dark-mode'));
});
