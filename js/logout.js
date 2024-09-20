// js/logout.js

// Удаление токена и перенаправление на страницу входа
window.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem('authToken');
    document.getElementById('result').innerText = 'Вы успешно вышли.';
    // Перенаправление на страницу входа через 2 секунды
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});
