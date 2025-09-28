// scripts/theme.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  if (!toggleButton) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  function updateButtonIcon() {
    toggleButton.textContent = document.documentElement.getAttribute('data-theme') === 'dark'
      ? '☀️ / 🌙'
      : '🌙 / ☀️';
  }

  toggleButton.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonIcon();
  });

  updateButtonIcon();
});