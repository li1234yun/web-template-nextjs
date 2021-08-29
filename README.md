# Nav Website

## 项目依赖

- react
- nextjs
- eslint
- prettier
- material-ui
- tailwindcss

## 项目初始化

[参考博客](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js)

## 样式选择

### material-ui的可扩展性和tailwindcss的灵活性选择

withStyles的本质是生成styles的对应样式名并按照调用顺序进行样式覆盖，从而实现对样式的控制。 为了是实现对样式的覆盖，关键是提供样式的注入点。

- withStyles覆盖样式 withStyles可以嵌套使用，每次会生成唯一的样式名覆盖前面生成的样式
- withStyles结合tailwindcss默认样式进行开发，withStyles利用`material-UI`提供的主题、属性访问等特性进行动态样式生成

## 问题汇总

- 项目组件模块导入提示无法找到

```json5
// tsconfig.json添加如下配置解决（需要重启项目生效）
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

- warning prop classname did not match.
[类名不匹配](https://github.com/vercel/next.js/issues/7322#issuecomment-891398982)

## TODO

- [ ] Material-UI 黑暗模式切换