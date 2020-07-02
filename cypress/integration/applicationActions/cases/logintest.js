// cypress/integration/spec.js
import { login } from './util'

it('logs in', () => {
  cy.visit('/login')
  login('username', 'password')
})