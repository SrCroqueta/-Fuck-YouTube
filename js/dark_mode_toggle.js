document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const darkThemeLink = document.getElementById('dark-theme-link');

    darkModeSwitch.addEventListener('change', () => {
        if (darkModeSwitch.checked) {
            darkThemeLink.removeAttribute('disabled');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkThemeLink.setAttribute('disabled', 'true');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Load the dark mode state from local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        darkModeSwitch.checked = true;
        darkThemeLink.removeAttribute('disabled');
    }
});
