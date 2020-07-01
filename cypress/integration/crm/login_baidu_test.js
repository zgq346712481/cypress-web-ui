//login_baidu.js
//zgq
///<reference types="cypress"/>






describe("My first test case for cypress",function(){
    beforeEach(function () {
        cy.visit("https://www.baidu.com/")
    });

    it("百度输入框功能", function() {
        cy.visit('https://www.baidu.com') //打开百度网站
        cy.get('#kw').type('Cypress')  //获取搜索框并输入Cypress
            .should('have.value', 'Cypress')  //断言文本成功输入
            .clear()  //清空输入框
            .should('have.value', '')  //断言输入框文本已成功清除   
    })

    it('百度一下按钮文本检查', function() {
        cy.get("#su").then($button_start_search=>{
            expect($button_start_search.attr("value")).to.eq("百度一下");
        })
　　})


    it('visit baidu home page and search for testerhome:',function(){
    cy.title().should('contain','百度一下，你就知道')   //验证页面 title 是否正确
    cy.get('#kw')      //根据 css 定位搜索输入框
    .type('cypress')        //输入关键字
    .should('have.value','cypress')  //验证关键字自动是否展示正确
    cy.get('#su').click()   //根据 css 定位搜索按钮并点击
    cy.url().should('include','wd=cypress')     //验证目标url 是否正确包含关键字
    cy.title().should('contain','cypress_百度搜索')  //验证页面 title 是否正确
    cy.get('[id="1"]')   
    .should('contain','cypress')   // 验证第一个结果中是否包含cypress
    cy.screenshot()
    })


    
    it('百度贴吧登录',function(){
        //点击登录按钮
        cy.get('#u1>a[name="tj_login"]').click()
        //选择用户名登录
        cy.get('p[title="用户名登录"]').click()
        //输入账号
        cy.get('#TANGRAM__PSP_11__userName').type("346712481@qq.com").should('have.value','346712481@qq.com')
        cy.wait(2000)
        //输入密码
        cy.get('#TANGRAM__PSP_11__password').type("1qaz!QAZ").should('have.value','1qaz!QAZ')
        cy.wait(2000)
        //点击登录按钮
        cy.get('#TANGRAM__PSP_11__submit').click()
        cy.wait(4000) //图形验证码绕过：可API-cookie共享
        //判断你的用户名存在
        cy.get('#s-top-username').should('contain','账号昵称')
    })

    describe('第一个hello world脚本从百度开始', function() {
        beforeEach(() => {
              cy.visit('https://www.baidu.com')
            })
          it("百度输入框功能", function()
          {
              cy.get('#kw').type('yoyo')
                  .should('have.value', 'yoyo')
                  .clear()
                  .should('have.value', '')
              })
        })

    //api登录
    it('loginInAs', () => {
        const url = `${Cypress.config("baseApi")}/login`;
        const body = {
            mobileNo: "username",
            password: "password",
        };
        cy.request({
           method:method,
           url:url,
           form:form,
           body:data
        }).its('body')
           .then((body) => {
                window.sessionStorage.setItem("Admin-Token", body.result.tokenValue);
            });
        cy.log(cy.wrap(sessionStorage.getItem("Admin-Token")))
    });
})
