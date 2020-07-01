Cypress.Commands.add('login', (userType, options = {}) => {
    const accountTypes = {
        admin:{
            "username":"xxx",
            "password":"xxx",
        }
    }
    cy.request({
        url:'your URL address',
        method:'POST',
        body:accountTypes[userType]
    })
})
