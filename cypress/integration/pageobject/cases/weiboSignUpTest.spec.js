import signUpPage from './weiboSignUpPage'

describe('weibo sign up test', () => {
    beforeEach('visit sign up page of weibo', () => {
        cy.visit('https://weibo.com/signup/signup.php')
    })
    it('should sign up in weibo successfully', () => {
        signUpPage.inputUserName('123')
        signUpPage.inputPassword('123098')
        signUpPage.selectBirthday('1995', '2', '21')
        signUpPage.inputPinCode('123')
        signUpPage.submit()
        signUpPage.shouldShowErrorMessage('手机号长度11位，以13/14/15/16/17/18/19开头')
    })
})
