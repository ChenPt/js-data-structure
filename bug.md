# ss

``` javascript


exports.install = function (vue, browserify) {
  if (installed) { return }
  installed = true

  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
```

## aaa

修改vue里的style标签下的内容并不会自动更新
