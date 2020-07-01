# CRM-前端web自动化

## 文档

https://docs.cypress.io/zh-cn/guides/tooling/reporters.html#Report-per-spec

新建项目目录－－初始化－－安装依赖环境包－－cypress启动－－执行用例－－调试脚本－－查看报告

## 项目初始化

zgq@zgq-PC:/media/zgq/data/code/github.com/cypress/cypress-crm-web$ npm init
zgq@zgq-PC:/media/zgq/data/code/github.com/cypress/cypress-crm-web$ npm install cypress --save-dev
zgq@zgq-PC:/media/zgq/data/code/github.com/cypress/cypress-crm-web$ ./node_modules/.bin/cypress open


## // cypress目录

---- fixtures 测试数据配置文件，可以使用fixture方法读取
---- integration 测试脚本文件
---- plugin 插件文件
---- support 支持文件
- cypress.json // cypress全局配置文件
- package.json //这个要自己创建

### cypress.json　配置

{
    "baseUrl": "https://staging.airwallex.com/en-AU/",
    "integrationFolder": "cypress/integration",
    "testFiles": "*.js",
    "video":false,
    "defaultCommandTimeout": 10000
    "viewportHeight": 768,
    "viewportWidth": 1366,
    "projectId": "youlu_cypress_test_demo01",
    "reporter": "cypress_test_report",
    "reporterOptions": {
    "reportDir": "cypresse/results",
    "overwrite": false,
    "html": true,
    "json": true
}


## vscode编写用例

/// <reference types="Cypress" />
describe("baidu测试",()=>{
    beforeEach(()=>{
        cy.visit("http://www.baidu.com")
    })
    it("输入查询cypress",()=>{
        cy.get("#kw")
          .type("cypress")
        cy.get("#su")
          .click()
        cy.get('body').should('contain', 'cypress')
    })
})
## cypress管理页面实时调试(页面reload)


## 生成测试报告

在项目目录下，执行npm install mocha mochawesome
安装完成就可以在package.json下看到依赖包
打开cypress.json，添加生成报告的命令
{
    "reporter": "mochawesome",
    "reporterOptions": {
    "reportDir": "cypresse/results",
    "overwrite": false,
    "html": true,
    "json": true
    }
}

执行cypress run，就可以生成所有测试用例的报告了

## api-desc

describe 声明一个测试用例集
beforeEach 测试用例前置操作，相当于setup
it声明了一个测试用例
cy.get 定位元素，用css selector定位选择器
type 输入文本
should 断言，hava.value 是元素的value属性值，判断是否为‘Cypress’
clear 清空文本
should 继续断言，文本框内容为空字符串




