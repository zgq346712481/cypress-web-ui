describe("github测试", () => {
    it("github", () => {
      cy.visit("https://git.youlu.com/");
      cy.get("#user_login")
        .type("zhanggangqiang");
      cy.get("#user_password")
        .type("1qaz!QAZ");
      cy.wait(1000)
      //css
      cy.get("#new_user > div.submit-container.move-submit-down > input").click();
      cy.wait(1000)
      cy.get("body > header > div > div > div.navbar-collapse.collapse > ul > li.nav-item.header-user.dropdown.show > div > ul > li.current-user > div").title;
      cy.getCookies('_gitlab_session').should('have.property', 'domain', 'git.youlu.com')
    });

  });