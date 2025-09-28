// scripts/theme.js
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);

function updateButtonIcon() {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    toggleButton.textContent = '☀️ / 🌙';
  } else {
    toggleButton.textContent = '🌙 / ☀️';
  }
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonIcon();
  });

  updateButtonIcon();
}