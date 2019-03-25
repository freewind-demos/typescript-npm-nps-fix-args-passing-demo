module.exports = {
  scripts: {
    default: 'echo 1111',
    hello: {
      default: 'echo 2222',
      another: 'echo 3333'
    },
    demo: {
      default: 'node hello.js'
    }
  }
};
