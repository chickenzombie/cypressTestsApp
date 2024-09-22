# Автоматизация формы входа с помощью Cypress

Это тестовое приложение с формой логина, автоматизированное с помощью Cypress.

## Технологии

- Cypress
- HTML
- JavaScript

## Установка

Чтобы установить проект, выполните следующие команды в терминале:

```bash
git clone https://github.com/chickenzombie/cypressTestsApp.git
cd cypressTestsApp
npm install
```
## Запуск тестов

Чтобы запустить тесты, выполните следующую команду:

```bash
npx cypress open
```
## Пример теста

Вот пример теста, который проверяет, что форма логина работает корректно:

```bash
describe('Login Form', () => {
  it('should fill the login form and submit', () => {
    cy.visit('http://localhost:8080'); //

    // Заполнение полей формы
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password123');

    // Отправка формы
    cy.get('button[type="submit"]').click();

    // Проверка успешной отправки
    cy.contains('Welcome, testuser!');
  });
});
```



