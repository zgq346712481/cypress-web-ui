import Header from './Headers';
import SignInPage from './SignIn';

class HomePage {
  constructor() {
    this.header = new Header();
  }

  visit() {
    cy.visit('/');
  }

  getUserAvatar() {
    return cy.get(`[data-testid=UserAvatar]`);
  }

  goToSignIn() {
    const link = this.header.getSignInLink();
    link.click();

    const signIn = new SignInPage();
    return signIn;
  }
}

export default HomePage;