describe('Login Form', () => {
  it('should fill the login form and submit', () => {
    cy.visit('http://localhost:3000');

    // Заполнений полей формы
    cy.get('input[name="username"]').type('validUser');
    cy.get('input[name="password"]').type('validPassword');

    // Отправка формы
    cy.get('button[type="submit"]').click();

    // Проверка успешной отправки
    cy.contains('Welcome, validUser!'); // Сообщение после успешного логина
  })
})