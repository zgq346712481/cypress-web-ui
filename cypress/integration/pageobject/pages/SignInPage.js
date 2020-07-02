class SignInPage {
  visit() {
    cy.visit('/signin');
  }

  getEmailError() {
    return cy.get(`[data-testid=SignInEmailError]`);
  }

  getPasswordError() {
    return cy.get(`[data-testid=SignInPasswordError]`);
  }

  fillEmail(value) {
    const field = cy.get(`[data-testid=SignInEmailField]`);
    field.clear();
    field.type(value);

    return this;
  }

  fillPassword(value) {
    const field = cy.get(`[data-testid=SignInPasswordField]`);
    field.clear();
    field.type(value);

    return this;
  }

  submit() {
    const button = cy.get(`[data-testid=SignInSubmitButton]`);
    button.click();
  }
}

export default SignInPage;