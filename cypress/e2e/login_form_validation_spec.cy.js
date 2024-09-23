describe('Login Form Validation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('should show an error message for empty username', () => {
    cy.get('input[name="username"]').clear(); // Очистка поля
    cy.get('input[name="password"]').type('somePassword'); // Убедитесь, что пароль введен
    cy.get('button[type="submit"]').click();
    cy.get('.error-message', { timeout: 10000 }).should('contain', 'Username is required');
  });

  it('should show an error message for empty password', () => {
    cy.get('input[name="username"]').type('validUser'); // Вводим корректное имя пользователя
    cy.get('input[name="password"]').clear(); // Очищаем поле пароля
    cy.get('button[type="submit"]').click();

    cy.get('.error-message', { timeout: 10000 }).should('contain', 'Password is required');
  });


  it('should show an error message for invalid username', () => {
    cy.get('input[name="username"]').type('wrongUser'); // Ввод некорректного имени пользователя
    cy.get('input[name="password"]').type('validPassword'); // Ввод корректного пароля
    cy.get('button[type="submit"]').click();

    cy.get('.error-message', { timeout: 10000 }).should('contain', 'Invalid username or password');
  });


  it('should show an error message for invalid password', () => {
    cy.get('input[name="username"]').type('validUser'); // Ввод корректного имени пользователя
    cy.get('input[name="password"]').type('wrongPassword'); // Ввод корректного пароля
    cy.get('button[type="submit"]').click();

    cy.get('.error-message', { timeout: 10000 }).should('contain', 'Invalid username or password');
  });
})