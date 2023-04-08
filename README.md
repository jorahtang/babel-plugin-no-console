<br />
<h1 align="center">babel-plugin-no-console</h1>
<p align="center">
<a href="https://github.com/jorahtang/babel-plugin-no-console/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/jorahtang/babel-plugin-no-console"></a>
<a href="https://github.com/jorahtang/babel-plugin-no-console/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/jorahtang/babel-plugin-no-console"></a>
</p>

## 目标

移除代码中的 console 语句。

## 使用方式

局部安装

```BASH
# 1. 项目中执行
npm install -D babel-plugin-no-console

# 2. babelrc或 babel.config.js中添加
{
  plugins: ["babel-plugin-no-console"]
}


```

### options

| Property   | Type  | Default | Description                                                                                        |
| ---------- | ----- | ------- | -------------------------------------------------------------------------------------------------- |
| exclude | Array | []      | 需要保留的方法 。如传入'warn' 则会保留 console.warn()语句，不会被移除,可传值：‘warn’,'log','error' |

## 使用

### 例子

1. 使用默认配置

```js
.babelrc 或 babel.config.js

{
  plugins: [
    [
      "babel-plugin-no-console"
    ]
  ]
}
```

转换前：

```js
const x = 12;
const y = 13;
function add(m, n) {
  if (typeof m != number || typeof n != number) {
    console.error("TypeError");
  }
  console.warn("warning");
  return m + n;
}
const result = add(x, y);
console.log(result);
```

转换后：

```js
const x = 12;
const y = 13;
function add(m, n) {
  if (typeof m != number || typeof n != number) {
  }
  return m + n;
}
const result = add(x, y);
```

2. 自定义配置
   保留 console.error()

```js
.babelrc 或 babel.config.js

{
  plugins: [
    [
      "babel-plugin-no-console",
      {
        exclude:['error']
      }
    ]
  ]
}
```

转换前：

```js
cconst x = 12;
const y = 13;
function add(m, n) {
  if (typeof m != number || typeof n != number) {
    console.error("TypeError");
  }
  console.warn("warning");
  return m + n;
}
const result = add(x, y);
console.log(result);
```

转换后：

```js
cconst x = 12;
const y = 13;
function add(m, n) {
  if (typeof m != number || typeof n != number) {
    console.error("TypeError");
  }
  return m + n;
}
const result = add(x, y);
```
