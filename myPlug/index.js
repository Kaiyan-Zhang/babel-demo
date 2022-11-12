module.exports = function() {
  return {
    visitor: {
      Identifier(path) {
        path.node.name = path.node.name.toUpperCase();
        console.log("Identifier: ", path.node.name)
      },
    },
  };
}
