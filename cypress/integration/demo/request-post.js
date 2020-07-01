
describe('cypress request login zentao',function(){
    it('login CRM',function(){
        cy.request({
            url:'https://uadminuat.niceloo.com/login',
            method:'post',
            form:true,  // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            body: {
                apis:'[{"api":"uc/login","params":{"userLoginname":"admin","userLoginpwd":"youlu@2019","userMobile":"","userEmail":"","verify":"","captcha":{"captchaToken":"3C08AE5470C340ECB335AA385BDA8198","captchaValue":"5073"}}}]',
                ctype:'youlu@ADMIN.WEB',
                TOKEN:'',
                greencard:''
            }
        })
        .then((resp) => {
            // assert status code is 200
            expect(resp.status).to.eq(200)
            // assert body contains success
            // expect(resp.body).to.contains("success")
          })

    })
})