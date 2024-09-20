// js/login.js

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const Login = document.getElementById('loginUsername').value;
    const Password = document.getElementById('loginPassword').value;

    console.log('Отправка запроса на вход...');

    try {
        const response = await fetch(`${apiBase}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Login: Login, Password: Password }) // Убедитесь, что поля соответствуют бэкенду
        });

        const resultDiv = document.getElementById('result');

        if (response.ok) {
            const result = await response.text(); // Предполагаем, что бэкенд возвращает JSON
            console.log('Получен токен:', result);
            resultDiv.innerText = `Вход выполнен. Токен получен.`;
            // Сохранение токена в localStorage для последующих запросов
            localStorage.setItem('authToken', result);
            // Перенаправление на страницу пользователя
            window.location.href = 'user.html';
        } else {
            const error = await response.text();
            resultDiv.innerText = `Ошибка входа: ${error}`;
        }
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        document.getElementById('result').innerText = 'Произошла ошибка при выполнении запроса.';
    }
});
