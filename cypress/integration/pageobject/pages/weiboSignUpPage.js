function inputUserName(userName) {
    cy.get('input[name=username]').type(userName)
}

function inputPassword(password) {
    cy.get('input[name=passwd]').type(password)
}

function selectBirthday(year, month, day) {
    cy.get('select[node-type=birthday_year]').select(year)
    cy.get('select[node-type=birthday_month]').select(month)
    cy.get('select[node-type=birthday_day]').select(day)
}

function inputPinCode(pinCode) {
    cy.get('input[name=pincode]').type(pinCode)
}

function submit() {
    cy.get('a[action-type=btn_submit]').click()
}

function shouldShowErrorMessage(errorMessage) {
    cy.get('.error').should('contain', errorMessage)

}

module.exports = {
    inputUserName: inputUserName,
    inputPassword: inputPassword,
    inputPinCode: inputPinCode,
    selectBirthday: selectBirthday,
    submit: submit,
    shouldShowErrorMessage: shouldShowErrorMessage
}
