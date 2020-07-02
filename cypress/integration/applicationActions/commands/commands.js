// cypress/integration/util.js
export const login = (username, password) => {
    cy.get('#login-username').type(username)
    cy.get('#login-password').type(password)
    cy.get('#login').submit()
  }