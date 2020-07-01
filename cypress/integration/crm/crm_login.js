/// <reference types="Cypress" />
describe('登陆web网站案例', function() {
    beforeEach(() => {
          cy.visit('https://uadminuat.niceloo.com')
        //   Cypress.cookies.property.getCookies;
        })

    it("登陆案例", function()
    {
        // 输入用户名
        cy.get('body > div > div > div.nl_header.theme-uc.theme-default > div > div > div > div.nl_fpdform > div:nth-child(2) > div:nth-child(2) > div > input').type('admin')
              .should('have.value', 'admin')
        // 输入密码
        cy.get('body > div:nth-child(1) > div > div.nl_header.theme-uc.theme-default > div > div > div > div.nl_fpdform > div:nth-child(2) > div:nth-child(3) > div > input').type('youlu@2019')
              .should('have.value', 'youlu@2019')
        // 提交表单
        cy.get('body > div:nth-child(1) > div > div.nl_header.theme-uc.theme-default > div > div > div > div.nl_fpdform > div:nth-child(2) > div.nlf_btnbox > input').click()
        // 判断页面跳转到
        cy.url().should('include', '/home')
        // and '欢迎您：admin' in page
        cy.get('body').should('contain', '首页')
        // 判断存在cookie值 'TOKENcom.niceloo.uadmin'
        cy.getCookie('TOKENcom.niceloo.uadmin').should('exist')
        // cy.getCookie('TOKENcom.niceloo.uadmin').should('have.property', 'FZ_STROAGE', '')
        // cy.getCookies() yields an array of cookies
        cy.getCookies().should('have.length', 1).should((cookies) => {
        // each cookie has these properties
        expect(cookies[0]).to.have.property('FZ_SESSION', '')

    })


    it("登录-api方式)", function()
    {

    })

    it("三级菜单跳转", function()
    {

    })

    it("操作页面元素(Actions行为事件)", function()
    {

    })

    it("cookie操作共享)", function()
    {
        // cy.get('#getCookie .set-a-cookie').click()
        // cy.getCookie() yields a cookie object
        // cy.getCookie('uadminuat.niceloo.com').should('have.property', 'TOKENcom.niceloo.uadmin', '9BC6ACE6BD5F4A17A51DF22D459BEBBD')
        cy.getCookies().should('be.empty')
        cy.get('#getCookies .set-a-cookie').click()

    })
})
})