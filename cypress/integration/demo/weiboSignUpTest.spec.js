describe('weibo sign up test', () => {
    beforeEach('visit sign up page of weibo', () => {
        cy.visit('https://weibo.com/signup/signup.php')
    })

    it('should sign up in weibo successfully', () => {
        cy.get('input[name=username]').type('123')
        cy.get('input[name=passwd]').type('123098')
        cy.get('select[node-type=birthday_year]').select('1995')
        cy.get('select[node-type=birthday_month]').select('2')
        cy.get('select[node-type=birthday_day]').select('21')
        cy.get('input[name=pincode]').type('123')
        cy.get('a[action-type=btn_submit]').click()
        cy.get('.error').should('contain', '手机号长度11位，以13/14/15/16/17/18/19开头')
    })
    
})
