
describe('cypress request login CRM',function(){
    var captchaTokenApi = "/sc/captcha/captcha/token";
    var host = "https://umsauat.niceloo.com";
    var apiUrl = "/api";
    var captchaImage = "/sc/captcha/captcha/image?captchaToken="
    var crmUrl ="https://uadminuat.niceloo.com";

    /**
         * 登录接口
         * @param {*} host 
         * @param {*} apiUrl 
         * @param {*} captchaToken 
         * @param {*} logCaptcha 
         */
        var login = function(host,apiUrl,captchaToken,logCaptcha){
            cy.request({
            url:host+apiUrl,
            method:'POST',
            // form:true,  // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: {
                apis:'[{"api":"uc/login","params":{"userLoginname":"admin","userLoginpwd":"youlu@2019","userMobile":"","userEmail":"","verify":"","captcha":{"captchaToken":"'+captchaToken+'","captchaValue":"'+logCaptcha+'"}}}]            ',
                ctype:'youlu@ADMIN.WEB',
                TOKEN:'',
                greencard:''
            }
        })
        .then((resp) => {
            // assert status code is 200
            expect(resp.status).to.eq(200)
            console.log(resp);
            // assert body contains success
            expect(resp.body[0].result).to.contains("000000")
            console.log(cy.getCookies());
            Cypress.Cookies.debug(true);
            console.log(resp.body[0].data.token);
            Cypress.Cookies.preserveOnce('TOKENcom.niceloo.uadmin', resp.body[0].data.token);
            // cy.getCookie('TOKENcom.niceloo.uadmin').should('have.property', 'TOKENcom.niceloo.uadmin', resp.body[0].data.token)
            // cy.getCookie('TOKENcom.niceloo.uadmin').should('exist');
            cy.visit('https://uadminuat.niceloo.com/bd/bdPypaList');
          })
    }


    /**
     * 初始化：api登录接口，绕过UI登录
     */
    beforeEach(function () {
        var reqUrl ="?apis=%5B%7B%22api%22%3A%22sc%2Fcaptcha%2Fcaptcha%22%2C%22params%22%3A%7B%22scene%22%3A%22uc_login%22%7D%7D%5D&TOKEN=&ctype=ADMIN.WEB&greencard=";
        var captchaUrl = host + apiUrl+reqUrl;
        var captchaImageUrl = host + captchaImage;
        cy.request({
            url:captchaUrl,
            method:'POST',
            // form:true,  // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: {
            }
        })
        .then((resp) => {
            // assert status code is 200
            expect(resp.status).to.eq(200)
            // assert body contains success
            // expect(resp.body).to.contains("000000")
            //  获取 captchaToken
            console.log(resp);
             var captchaToken = resp.body[0].data.captchaToken;
             var logCaptcha = resp.body[0].data.captchaValue;
             login(host,apiUrl,captchaToken,logCaptcha);
          })
      })


    //   it("登录-ui方式", function() {
    //     cy.visit('https://uadminuat.niceloo.com')
    //     // 输入用户名
    //        cy.get('body > div > div > div.nl_header.theme-uc.theme-default > div > div > div > div.nl_fpdform > div:nth-child(2) > div:nth-child(2) > div > input').type('admin',{ delay: 1000 })
    //              .should('have.value', 'admin')
    //        // 输入密码
    //        cy.get('body > div:nth-child(1) > div > div.nl_header.theme-uc.theme-default > div > div > div > div.nl_fpdform > div:nth-child(2) > div:nth-child(3) > div > input').type('youlu@2019',{ delay: 1000 })
    //              .should('have.value', 'youlu@2019')
    //        // 提交表单
    //        cy.get('body > div:nth-child(1) > div > div.nl_header.theme-uc.theme-default > div > div > div > div.nl_fpdform > div:nth-child(2) > div.nlf_btnbox > input').click()
    //        // 判断页面跳转到
    //        cy.url().should('include', '/home')
    //        // and '欢迎您：admin' in page
    //        cy.get('body').should('contain', '首页')
    //        cy.getCookies().should('exist');
    //        // 判断存在cookie值 'TOKENcom.niceloo.uadmin'
    //        cy.getCookie('TOKENcom.niceloo.uadmin').should('exist')
    //        // cy.getCookies() yields an array of cookies
    //        cy.getCookies().should('have.length', 5).should((cookies) => {
    //         // each cookie has these properties
    //         expect(cookies[3]).to.have.property('httpOnly', false)
    //         expect(cookies[0]).to.have.property('secure', false)
    //         expect(cookies[0]).to.have.property('domain')
    //         expect(cookies[0]).to.have.property('path')
    //         expect(cookies[0]).to.have.property('name', 'TOKENcom.niceloo.uadmin')
    //         })
    //         // cy.getCookie('TOKENcom.niceloo.uadmin').should('have.property', 'value', '  ')
    //         // .then((cookie) => {
    //         // // cookie is an object with "domain", "name" and other properties
    //         // })

    //         // cy.get('.action-form').submit().next();  


    //     //访问其他页面
    //     cy.visit('https://uadminuat.niceloo.com/bd/bdProject')
    //    })

      it("操作页面元素(Actions行为事件)", function()
      {
        cy.visit('https://uadminuat.niceloo.com/bd/bdPypaList')
  
      })

      it("文件上传(cypress-file-upload)", function()
      {
        cy.visit('https://uadminuat.niceloo.com/bd/bdPypaList')
  
      })



    it("频繁登录－验证码解析", function()
    {
         /**
         * 将图片转为 base64 方便百度识别。
         * @param {*} img 
         */
        function getBase64Image(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            //获取图片的base64　document.querySelector("cavas-css选择器").toDataURL();
            var dataURL = canvas.toDataURL("image/png");
            return dataURL
            // return dataURL.replace("data:image/png;base64,", "");
            }
        
            /**
             * 百度识图，获取连接token
             */
            var bdGetToken = function () {
                var tokenUrl = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=QWW8kQBkR4NHTcqM7v1XeRzs&&client_secret=V2VMwGikLXB9xrXLMFF10KRLWBph4Wyi";
                cy.request({
                    url: tokenUrl,
                    method: "POST",
                }).then(function (res) {
                    bdToken = res.body[0].access_token;
                })
                return bdToken;

            }
        
            /**
             * 百度识图，解析验证码
             * @param {*} token 
             * @param {*} imageData 
             */
            var bdGetCode = function (token, imageData,host,captchaToken) {
                var getCodeUrl = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=" + token;
                // console.log(token)
                // console.log(imageData)
                var encode = encodeURIComponent(imageData)
                var code = null;
                cy.request({
                    url: getCodeUrl,
                    method: "POST",
                    data: {
                        image: encode
                    }
                }).then(function (res) {
                    try{
                        code = res.body[0].words_result[0].words;
                        if(code.length == 4 && Number(code)){
                              // 进行登录。
                              login(host,code,captchaToken)
       
                        }else{
                            console.log("识别图形为："+ code +  ": 正在重新获取")
                            logCaptcha(host)
                        }
                    }catch(err){
                        logCaptcha(host)
                    }
    
                }
)
            }
    })

})
