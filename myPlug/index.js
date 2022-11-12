module.exports = function() {
  return {
    visitor: {
      Identifier(path) {
        console.log("Identifier: ", path.node.name)
      },
    },
  };
}
