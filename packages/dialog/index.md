## Dialog 对话框

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-dialog": "path/to/kai-ui/dialog/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```html
<k-dialog id="k-dialog"/>
```

```javascript

import Dialog from 'path/to/kai-ui/dialog/index';

Dialog.show('#k-dialog', options).then((value) => {
  console.log(value) // 0: 微信支付 1: 支付宝 2: 京东
}, () => {
  console.log('reject')
})

```

#### 按钮纵向排列
```javascript
const options = {
  title: '删除订单提示',
  content: '确定要删除该订单吗？',
  type: 'muti',
  showVertical: true,
  buttons: [{
    text: '取消'
  }, {
    text: '确定',
    color: '#C59E6C'
  }]
}
Dialog.show('#k-dialog', options).then((value) => {
  console.log(value) // 0: 微信支付 1: 支付宝 2: 京东
}, () => {
  console.log('reject')
})
```

#### 按钮横向排列
```javascript
const options = {
  title: '支付选择',
  content: '请选择一种支付方式',
  type: 'muti',
  showVertical: false,
  buttons: [{
    text: '微信支付',
    color: '#0EB00B'
  }, {
    text: '支付宝',
    color: '#48A9E9'
  }, {
    text: '京东',
    color: '#E45143'
  }]
}
Dialog.show('#k-dialog', options).then((value) => {
  console.log(value) // 0: 微信支付 1: 支付宝 2: 京东
}, () => {
  console.log('reject')
})
```

#### 异步按钮
```javascript
const options = {
  title: '删除确认',
  content: '删除之后无法恢复',
  type: 'muti',
  showVertical: false,
  buttons: [{
    text: '取消'
  }, {
    text: '删除',
    color: '#E45143',
    sync: true
  }]
}
Dialog.show('#k-dialog', options).then((value) => {
  console.log(value) // 0: 删除
  if (value === 1) {
    setTimeout(() => {
      Dialog.reset('#k-dialog')
    }, 3000)
  }
}, () => {
  console.log('reject')
})
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| title | 对话框标题 | `String` | ` ` | `标题` |
| content | 对话框提示内容 | `String` | ` ` | `内容` |
| type | 对话框类型(自定义按钮必须指定为mutil，否则按钮仅出现确定取消) | `String` | ` `| ` ` |
| showVertical | 对话框按钮显示类型 | `Boolean` | `true` `false` | `false` |
| buttons | 对话框按钮组 | `Array` | ` ` | `[]` |

### buttons
API buttons数组

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| text | 按钮内容 | `String` | ` ` | ` ` |
| color | 按钮字体颜色 | `String` | ` ` | `#333` |
| sync | 点击该按钮是否异步 | `Boolean` | `true` `false` | `false` |


### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

