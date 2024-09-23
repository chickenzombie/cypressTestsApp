# Запуск сервера и тестов Cypress
start:
	npm start & # Запускаем сервер в фоновом режиме
	sleep 5     # Ждем 5 секунд, чтобы сервер успел запуститься

test:
	npx cypress run

# Сокращенная команда для запуска всех тестов
run_tests: start test
