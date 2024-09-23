describe('Login Form Validation Tests', () => {
  // Выполняется перед каждым тестом: загружает страницу с формой логина
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Открываем локальную страницу с формой логина
  });

  // Тест на валидацию пустого имени пользователя
  it('should show an error message for empty username', () => {
    cy.get('input[name="username"]').clear(); // Очищаем поле "username", чтобы оставить его пустым
    cy.get('input[name="password"]').type('somePassword'); // Вводим корректный пароль
    cy.get('#login-form button[type="submit"]').click(); // Отправляем форму
    cy.get('.error-message', { timeout: 10000 }).should('contain', 'Username is required'); // Проверяем, что отображается сообщение об ошибке
  });

  // Тест на валидацию пустого пароля
  it('should show an error message for empty password', () => {
    cy.get('input[name="username"]').type('validUser'); // Вводим корректное имя пользователя
    cy.get('input[name="password"]').clear(); // Очищаем поле "password", чтобы оставить его пустым
    cy.get('#login-form button[type="submit"]').click(); // Отправляем форму
    cy.get('.error-message', { timeout: 10000 }).should('contain', 'Password is required'); // Проверяем, что отображается сообщение об ошибке
  });

  // Тест на валидацию некорректного имени пользователя
  it('should show an error message for invalid username', () => {
    cy.get('input[name="username"]').type('wrongUser'); // Вводим некорректное имя пользователя
    cy.get('input[name="password"]').type('validPassword'); // Вводим корректный пароль
    cy.get('#login-form button[type="submit"]').click(); // Отправляем форму
    cy.get('.error-message', { timeout: 10000 }).should('contain', 'Invalid username or password'); // Проверяем, что отображается сообщение об ошибке
  });

  // Тест на валидацию некорректного пароля
  it('should show an error message for invalid password', () => {
    cy.get('input[name="username"]').type('validUser'); // Вводим корректное имя пользователя
    cy.get('input[name="password"]').type('wrongPassword'); // Вводим некорректный пароль
    cy.get('#login-form button[type="submit"]').click(); // Отправляем форму
    cy.get('.error-message', { timeout: 10000 }).should('contain', 'Invalid username or password'); // Проверяем, что отображается сообщение об ошибке
  });
});
