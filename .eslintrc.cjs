module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended', // https://eslint.vuejs.org/user-guide/#usage
    'eslint:recommended', // http://eslint.cn/docs/rules/
    './.eslintrc-auto-import.json' // 解决自动导入unplugin-auto-import报错
  ],
  globals: {
    'showToast': false,
    'showNotify': false,
    'showConfirmDialog': false
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    parser: '@babel/eslint-parser'
  },
  plugins: [
    'vue'
  ],
  rules: {
    // 配置自定义的规则
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: { max: 5 },
        multiline: { max: 1 }
      }
    ],
    'vue/custom-event-name-casing': 'off',
    'vue/no-multiple-objects-in-class': 2,
    'vue/no-potential-component-option-typo': [
      2,
      {
        presets: ['all'],
        custom: []
      }
    ],
    'vue/padding-line-between-blocks': [2, 'always'],
    'vue/require-direct-export': 2,
    'vue/v-for-delimiter-style': [2, 'in'],
    /* 强制 getter 和 setter 在对象中成对出现 */
    'accessor-pairs': 2,
    /* 在数组开括号后和闭括号前强制换行 */
    'array-bracket-newline': [2, 'consistent'],
    /* 强制数组方括号中使用一致的空格 */
    'array-bracket-spacing': [
      2,
      'never',
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    /* 强制数组元素间出现换行 */
    'array-element-newline': [2, 'consistent'],
    'arrow-parens': [2, 'as-needed'], // 要求箭头函数的参数使用圆括号
    /* 强制箭头函数的箭头前后使用一致的空格 */
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    /* 强制在代码块中使用一致的大括号风格 */
    'brace-style': [2, '1tbs', {
      allowSingleLine: true
    }],
    /* 强制使用骆驼拼写法命名约定 */
    camelcase: [0, { properties: 'always' }],
    'block-spacing': [2, 'always'],
    'comma-dangle': [2, 'never'], // 要求或禁止末尾逗号
    /* 强制在逗号前后使用一致的空格 */
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    /* 强制使用一致的逗号风格 */
    'comma-style': [2, 'last'],
    /* 要求 switch 语句中有 default 分支 */
    'default-case': 1,
    /* 强制尽可能地使用点号 */
    'dot-location': [2, 'property'],
    /* 要求或禁止在函数标识符和其调用之间有空格 */
    'func-call-spacing': 2,
    /* 强制使用一致的缩进 */
    indent: [2, 2, { SwitchCase: 1 }],
    /* 强制在 JSX 属性中一致地使用双引号或单引号 */
    'jsx-quotes': [2, 'prefer-single'],
    /* 要求或禁止文件末尾存在空行 */
    'eol-last': 2,
    /* 要求使用 === 和 !== */
    eqeqeq: [2, 'always', { null: 'ignore' }],
    /* 强制在对象字面量的属性中键和值之间使用一致的间距 */
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    /* 强制在关键字前后使用一致的空格 */
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    /* 强制最大行数 */
    'max-lines': [
      2,
      {
        max: 1200,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    /* 强制回调函数最大嵌套深度 */
    'max-nested-callbacks': [1, 5],
    /* 强制函数定义中最多允许的参数数量 */
    'max-params': [2, 5],
    /* 强制函数块最多允许的的语句数量 */
    'max-statements': [2, 100],
    /* 要求构造函数首字母大写 */
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    /* 强制或禁止调用无参构造函数时有圆括号 */
    'new-parens': 2,
    /* 要求方法链中每个调用都有一个换行符 */
    'newline-per-chained-call': [1, { ignoreChainWithDepth: 4 }],
    /* 禁用 Array 构造函数 */
    'no-array-constructor': 2,
    /* 禁用 arguments.caller 或 arguments.callee */
    'no-caller': 2,
    /* 禁止扩展原生类型 */
    'no-extend-native': 2,
    /* 禁止不必要的 .bind() 调用 */
    'no-extra-bind': 2,
    /* 禁止不必要的括号 */
    'no-extra-parens': [2, 'functions'],
    /* 禁用 eval() */
    'no-eval': 2,
    /* 禁止数字字面量中使用前导和末尾小数点 */
    'no-floating-decimal': 2,
    /* 禁止使用类似 eval() 的方法 */
    'no-implied-eval': 2,
    /* 禁用 __iterator__ 属性 */
    'no-iterator': 2,
    /* 禁用标签语句 */
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    /* 禁用不必要的嵌套块 */
    'no-lone-blocks': 2,
    /* 不允许标签与变量同名 */
    'no-label-var': 2,
    /* 禁止使用多个空格 */
    'no-multi-spaces': 2,
    /* 禁止使用多行字符串 */
    'no-multi-str': 2,
    /* 禁止出现多行空行 */
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1
      }
    ],
    /* 禁用 Object 的构造函数 */
    'no-new-object': 2,
    /* 禁止调用 require 时使用 new 操作符 */
    'no-new-require': 2,
    /* 禁止对 String，Number 和 Boolean 使用 new 操作符 */
    'no-new-wrappers': 2,
    /* 禁止在字符串中使用八进制转义序列 */
    'no-octal-escape': 2,
    /* 禁止对 __dirname 和 __filename 进行字符串连接 */
    'no-path-concat': 2,
    /* 禁用 __proto__ 属性 */
    'no-proto': 2,
    /* 禁止在 return 语句中使用赋值语句，除非用圆括号括起来 */
    'no-return-assign': [2, 'except-parens'],
    /* 禁止自身比较 */
    'no-self-compare': 2,
    /* 禁用逗号操作符 */
    'no-sequences': 2,
    /* 禁止抛出异常字面量 */
    'no-throw-literal': 2,
    /* 禁用行尾空格 */
    'no-trailing-spaces': 2,
    /* 禁止将变量初始化为 undefined */
    'no-undef-init': 2,
    /* 禁止不必要的 .call() 和 .apply() */
    'no-useless-call': 2,
    /* 禁止在对象中使用不必要的计算属性 */
    'no-useless-computed-key': 2,
    /* 禁用不必要的构造函数 */
    'no-useless-constructor': 2,
    /* 禁用一成不变的循环条件 */
    'no-unmodified-loop-condition': 2,
    /* 禁止可以在有更简单的可替代的表达式时使用三元操作符 */
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    /* 禁止出现未使用过的变量 */
    'no-unused-vars': [2, {
      vars: 'all', args: 'none'
    }],
    /* 要求使用 let 或 const 而不是 var */
    'no-var': 2,
    /* 禁止属性前有空白 */
    'no-whitespace-before-property': 2,
    /* 强制在大括号中使用一致的空格 */
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false,
        arraysInObjects: false
      }
    ],
    /* 强制操作符使用一致的换行符 */
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    /* 强制函数中的变量要么一起声明要么分开声明 */
    'one-var': [2, { initialized: 'never' }],
    /* 要求或禁止块内填充 */
    'padded-blocks': [2, 'never'],
    /* 要求使用 const 声明那些声明后不再被修改的变量 */
    'prefer-const': 2,
    /* 强制使用一致的反勾号、双引号或单引号 */
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    /* 禁止使用分号代替 ASI */
    semi: [2, 'never'],
    /* 强制分号之前和之后使用一致的空格 */
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    /* 强制在块之前使用一致的空格 */
    'space-before-blocks': [2, 'always'],
    /* 强制在 function的左括号之前使用一致的空格 */
    'space-before-function-paren': [2, 'never'],
    /* 强制在圆括号内使用一致的空格 */
    'space-in-parens': [2, 'never'],
    /* 要求操作符周围有空格 */
    'space-infix-ops': 2,
    /* 强制在一元操作符前后使用一致的空格 */
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    /* 强制在注释中 // 或 /* 使用一致的空格 */
    'spaced-comment': [2, 'always', { markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']}],
    /* 禁止模板字符串中的嵌入表达式周围空格的使用 */
    'template-curly-spacing': [2, 'never'],
    /* 要求 IIFE 使用括号括起来 */
    'wrap-iife': [2, 'any'],
    /* 强制在 yield* 表达式中 * 周围使用空格 */
    'yield-star-spacing': [2, 'both'],
    /* 禁止 “Yoda” 条件 */
    yoda: [2, 'never'],
    'vue/multi-word-component-names': 'off', // 关闭非驼峰命名组件报错
    // 禁止不必要的转义字符
    'no-useless-escape': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/comment-directive': 'off', // 解决index.html报错
    'vue/no-v-html': 'off'
  }
}
