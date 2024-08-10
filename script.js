// Function to toggle dark mode
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    // Save the current mode in localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Function to set the initial theme based on localStorage
function setInitialTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Set the initial theme when the page loads
document.addEventListener('DOMContentLoaded', setInitialTheme);
