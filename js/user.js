// js/user.js

// Функция для декодирования JWT
function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error('Ошибка при декодировании JWT:', e);
        return null;
    }
}

// Функция для отображения имени пользователя
function displayUsername() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        // Если токена нет, перенаправляем на страницу входа
        window.location.href = 'index.html';
        return;
    }

    const payload = parseJwt(token);
    const username = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    if (username) {
        document.getElementById('username').innerText = username;
    } else {
        document.getElementById('username').innerText = 'Пользователь';
    }
}

// Обработчик кнопки выхода
document.getElementById('logoutButton').addEventListener('click', () => {
    // Удаляем токен из localStorage
    localStorage.removeItem('authToken');
    // Перенаправляем на страницу входа
    window.location.href = 'index.html';
});

// При загрузке страницы отображаем имя пользователя
document.addEventListener('DOMContentLoaded', displayUsername);
