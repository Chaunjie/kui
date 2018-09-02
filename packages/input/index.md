## Input 输入框

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-input": "path/to/kai-ui/input/index"
}
```

### 代码演示

#### 初始化

```html
<k-input 
  label="{{ name.label }}"
  value="{{ name.value }}"
  placeholder="{{ name.placeholder }}"/>
```

```javascript

import Toast from 'path/to/kai-ui/toast/index';

Page({
  data:{
    name: {
      label: '收货人',
      value: '小明',
      clear: true,
      placeholder: '名字'
    }
  }
});

```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| label | 输入框左侧文案 | `String` | ` ` | ` ` |
| value | 输入框内容 | `String` `Number` | ` ` | ` ` |
| clear | 是否显示清除按钮 | `Boolean` | `true` `false` | `false` |
| placeholder | placeholder内容 | `String` | ` ` | ` ` |
| disabled | 输入框是否禁用 | `Boolean` | `true` `false` | `false` |
| error | 是否显示错误（搭配filter使用） | `Boolean` | `true` `false` | `false` |
| focus | 输入框是否聚焦 | `Boolean` | `true` `false` | `false` |
| adjust | 键盘弹起时，是否自动上推页面 | `Boolean` | `true` `false` | `false` |
| type | 单／多行输入框 | `String` | ` ` `textarea` | ` ` |
| inputType | 输入框类型 | `String` | `text` `number` `password` `idcard` `digit...` | `text` |
| maxlength | 输入框字符最大长度 | `Number` | `自定义` | `9999` |
| filter | 输入框正则字符串 | `String` | `自定义` | ` ` |

### Event

| 事件名 | 说明 |
|-----------|-----------|
| bind:input | 输入框内容改变时候触发, 参数为改变后的值 |
| bind:blur | 输入框失去焦点时候触发, 参数为改变后的值 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

