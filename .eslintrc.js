/*
* (1)环境(env)：设置你的脚本的目标运行环境，如browser，amd，es6，commonjs等，每种环境有预设的全局变量
* (2)全局变量：增加的全局变量供运行时使用
* (3)规则(rules)：设定的规则及该规则对应的报错level
*    三个level：
*    "off" or 0 - 关闭这个规则校验
*    "warn" or 1 - 开启这个规则校验，但只是提醒，不会退出
*    "error" or 2 - 开启这个规则校验，并退出
* (4)parser：配置解析器(Specifying Parser)，需要本地npm模块， Espree(默认) Esprima Babel-ESLint(支持ES7)
*/
/*
module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "my"
    ],
    "parserOptions": { 
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": ["airbnb"],
    "rules": {
        "semi": [2, "always"],
        "quotes": [2, "single"],
        "indent": ["error", "tab"],
        "comma-dangle": ["error", "never"],
        "no-console": ["error", { allow: ["log", "warn", "error"] }],
        "no-param-reassign": ["error", { "props": false }],
        // "my/var-length": ["warn"]
    }
}
*/