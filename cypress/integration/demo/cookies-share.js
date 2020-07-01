describe('登录后-访问首页', function() {
    before(() => {
          cy.login("admin", "youlu@2019")

        })
    
    it("访问首页", () =>
        {
            cy.visit("http://ip:8080/zentao/my/")
            cy.url().should('include', '/zentao/my/')
            cy.title().should('contain', '我的地盘 - 禅道')
        })

    it("访问后台管理", () =>
        {
            cy.visit("http://49.235.92.12:8080/zentao/admin/")
            cy.url().should('include', '/zentao/admin/')
            cy.title().should('contain', '后台管理 - 禅道')
        })

    })