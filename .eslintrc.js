module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    // allow async-await
    'generator-star-spacing': 'off', // 该规则规定了generator函数中星号两边的空白
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    "vue/html-self-closing": ["error", { // 自闭合设置
      "html": {
        "void": "never",
        "normal": "any",
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "always" | "never",
      "endTag": "always" | "never",
      "selfClosingTag": "always" | "never"
    }],
    "object-shorthand": 0,
    'indent': [2, 2], // 缩进风格
    'eqeqeq': 2, // 必须使用全等
    'eol-last': [0, 'always'], // 行结束符的设置
    'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
    'wrap-regex': 0, // 正则表达式字面量用小括号包起来
    'semi': [0, 'always'], // 语句强制分号结尾
    'default-case': 2, // switch语句最后必须有default
    'consistent-this': [2, 'that'],// this别名
    'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
    'arrow-parens': 0, // 箭头函数用小括号括起来
    'no-dupe-args': 2, // 函数参数不能重复
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-multi-spaces': 1, // 不能用多余的空格
  }
}
/*
如果不想使用eslint语法规格检测，请忽略上下文关闭
config文件夹中的index.js useEslint: false,重启webpack服务即可,
倘若只是想忽略局部文件Eslint的语法规格检测，请在.eslintignore添加，如下：
/src/* // 表示忽略src目录下所有文件Eslint的语法规格检测

vue-cli3的eslint配置问题
link1: https://www.jianshu.com/p/bfc7e7329cff
link2: https://blog.csdn.net/fifteen718/article/details/84555376
 example :
 rules: {
    "规则名": [规则值, 规则配置]
 }
 // 规则值：

 "off"或者0    //关闭规则关闭
 "warn"或者1    //在打开的规则作为警告（不影响退出代码）
 "error"或者2    //把规则作为一个错误（退出代码触发时为1）
*/