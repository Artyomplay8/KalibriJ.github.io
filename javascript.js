// Функция для переключения темы
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Функция для открытия модального окна
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

// Функция для закрытия модального окна
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Анимация для активных секций
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('active');
    }
  });
});
