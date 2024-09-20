// Регистрация
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const Login = document.getElementById('registerUsername').value;
    const Password = document.getElementById('registerPassword').value;

    const response = await fetch(`${apiBase}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Login, Password })
    });

    const resultDiv = document.getElementById('result');

    if (response.ok) {
        const result = await response.text();
        resultDiv.innerText = `Регистрация успешна. ID пользователя: ${result}`;
        // Перенаправление на страницу входа
        window.location.href = 'index.html';
    } else {
        const error = await response.text();
        resultDiv.innerText = `Ошибка регистрации: ${error}`;
    }
});
