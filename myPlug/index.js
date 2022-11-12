const template = require("@babel/template").default;

const buildImport = template(`
  import React from 'react';
`);

const importDeclaration = buildImport();

module.exports = function() {
  return {
    visitor: {
      Program(path) {
        path.unshiftContainer('body', importDeclaration);;
      },
      Identifier(path) {
        path.node.name = path.node.name.toUpperCase();
        console.log("Identifier: ", path.node.name)
      },
    },
  };
}
