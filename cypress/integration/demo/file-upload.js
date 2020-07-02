/* Plain HTML input */

import 'cypress-file-upload';

const yourFixturePath = 'data.json';
cy.get('[data-cy="file-input"]').attachFile(yourFixturePath);

/* Drag-n-drop component */

cy.get('[data-cy="dropzone"]').attachFile(yourFixturePath, { subjectType: 'drag-n-drop' });

/* 通过链接命令添加文件 */

const yourBestPicture = 'meow.png';
cy.get('[data-cy="file-input"]')
  .attachFile(yourFixturePath)
  .attachFile(yourBestPicture);

/* 指定文件编码 */

const weirdo = 'test.shp';
cy.get('[data-cy="file-input"]').attachFile({ filePath: weirdo, encoding: 'utf-8' });

/* 元素不可见时，聚焦{ force: true } */

cy.get('[data-cy="file-input"]').attachFile(yourFixturePath, { force: true });

/* 覆盖文件名 */

const data = 'test.json';
cy.get('[data-cy="file-input"]').attachFile({ filePath: data, fileName: 'users.json' });

/* 特殊处理fileContent */

const special = 'file.spss';
cy.fixtures(special, 'binary')
  .then(Cypress.Blob.binaryStringToBlob)
  .then((fileContent) => {
    cy.get('[data-cy="file-input"]').attachFile({ fileContent, filePath: special, encoding: 'utf-8' });
})

/* 使用fileContent时filePath非必传，但fileName和mimeType必传 */

const special = 'file.spss';
cy.fixtures(special, 'binary')
  .then(Cypress.Blob.binaryStringToBlob)
  .then((fileContent) => {
    cy.get('[data-cy="file-input"]').attachFile({ fileContent, fileName: 'special', mimeType: 'application/octet-stream', encoding: 'utf-8' });
})
