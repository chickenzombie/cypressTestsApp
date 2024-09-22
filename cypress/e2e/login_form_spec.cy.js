describe('Login Form', () => {
  it('should fill the login form and submit', () => {
    cy.visit('http://localhost:8080');

    // Filling in form fields
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="password"]').type('password123');

    // Submitting the form
    cy.get('button[type="submit"]').click();

    // Check for successful sending
    cy.contains('Welcome, testuser!'); // Message after successfull login
  })
})