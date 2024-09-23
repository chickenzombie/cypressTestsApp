describe('User Login Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Открываем страницу перед каждым тестом
  });

  it('should log in successfully with valid credentials', () => {
    // Регистрация пользователя
    cy.get('input[name="new-username"]').type('validUser');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="new-password"]').type('validPassword');
    cy.get('input[name="confirm-password"]').type('validPassword');
    cy.get('#register-form button[type="submit"]').click(); // Регистрация

    // Проверяем успешный вход
    cy.get('input[name="username"]').type('validUser'); // Вводим корректное имя пользователя
    cy.get('input[name="password"]').type('validPassword'); // Вводим корректный пароль
    cy.get('#login-form button[type="submit"]').click(); // Отправляем форму

    cy.get('#message', { timeout: 10000 }).should('contain', 'Welcome, validUser!'); // Проверяем, что пользователь авторизован
  });

  it('should show an error message for invalid credentials', () => {
    // Вводим некорректные данные для логина
    cy.get('input[name="username"]').type('wrongUser');
    cy.get('input[name="password"]').type('wrongPassword');
    cy.get('#login-form button[type="submit"]').click(); // Отправляем форму

    cy.get('#message', { timeout: 10000 }).should('contain', 'Invalid username or password'); // Проверяем сообщение об ошибке
  });

  it('should clear input fields after successful login', () => {
    // Регистрация пользователя
    cy.get('input[name="new-username"]').type('validUser');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="new-password"]').type('validPassword');
    cy.get('input[name="confirm-password"]').type('validPassword');
    cy.get('#register-form button[type="submit"]').click(); // Регистрация

    // Логин с корректными данными
    cy.get('input[name="username"]').type('validUser');
    cy.get('input[name="password"]').type('validPassword');
    cy.get('#login-form button[type="submit"]').click(); // Отправляем форму

    // Проверяем, что поля очищены после успешного логина
    cy.get('input[name="username"]').should('have.value', '');
    cy.get('input[name="password"]').should('have.value', '');
  });
});
