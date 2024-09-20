Соберите Docker-образ с помощью следующей команды:

```
docker build -t frontend-app
или
docker build -t frontend-app -f /path/to/Dockerfile /path/to/front-login
```

Запустите контейнер с маппингом порта:

```
docker run -p 5500:5500 frontend-app
```

Откройте браузер и перейдите по адресу: http://localhost:5500
