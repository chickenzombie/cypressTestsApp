describe('User Registration Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Открываем страницу перед каждым тестом
  });

  it('should show an error message when passwords do not match', () => {
    cy.get('input[name="new-username"]').type('newUser');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="new-password"]').type('password123');
    cy.get('input[name="confirm-password"]').type('password321');
    cy.get('#register-form button[type="submit"]').click(); // Нажимаем кнопку только в форме регистрации

    cy.get('#register-message', { timeout: 10000 }).should('contain', 'Passwords do not match');
  });

  it('should show an error message if password is less than 6 characters', () => {
    cy.get('input[name="new-username"]').type('newUser');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="new-password"]').type('123');
    cy.get('input[name="confirm-password"]').type('123');
    cy.get('#register-form button[type="submit"]').click();

    cy.get('#register-message', { timeout: 10000 }).should('contain', 'Password must be at least 6 characters long');
  });

  it('should successfully register with valid credentials', () => {
    cy.get('input[name="new-username"]').type('newUser');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="new-password"]').type('validPassword');
    cy.get('input[name="confirm-password"]').type('validPassword');
    cy.get('#register-form button[type="submit"]').click();

    cy.get('#register-message', { timeout: 10000 }).should('contain', 'Registration successful! Welcome, newUser');
  });
});
