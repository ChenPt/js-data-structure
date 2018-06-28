module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module'
  },
  rules: {
    // 第一个值为类型，0为取消，1为warn，2为error
    // 缩进为2个空格
    indent: ['error', 2],
    // 使用单引号
    quotes: ['error', 'single'],
    // 结尾从不加分号
    semi: ['error', 'never'],
    // 只能使用'==='
    eqeqeq: ['error', 'always'],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
