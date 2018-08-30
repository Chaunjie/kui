## Input 输入框

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-toast": "path/to/kai-ui/dist/toast/index"
}
```

### 代码演示

#### 初始化

```html
<k-toast id="k-toast"/>
```

```javascript

import Toast from 'path/to/kai-ui/dist/toast/index';

Page({
  onLoad() {
    Toast.init('k-toast')
  }
});

```

#### 纯文本提示
```javascript
const options = {
  content: '纯文本的提示'
}
Toast.show(options)

```

#### 加载中提示
```javascript
const options = {
  content: '加载中的提示'
}
Toast.loading(options)
setTimeout(() => {
  Toast.hide()
}, 3000)
```

#### 失败提示
```javascript
const options = {
  content: '失败的提示'
}
Toast.error(options)
```

#### 成功提示
```javascript
const options = {
  content: '成功的提示'
}
Toast.success(options)
```

#### 警告提示
```javascript
const options = {
  content: '警告的提示'
}
Toast.warning(options)
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| options | 提示信息配置 | `Object` | ` ` | `{}` |

### options
API options对象

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| content | 提示内容 | `String` | `自定义` | ` ` |
| position | 提示显示位置 | `String` | `middle` `top` `bottom` | `middle` |
| duration | 多长时间之后隐藏 | `Number` | `自定义` | `3000` |


### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

