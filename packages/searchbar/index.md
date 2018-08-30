## SearchBar 搜索条

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-searchbar": "path/to/kai-ui/minicomponent/searchbar/index"
}
```

### 代码演示

#### 初始化

```html
<k-searchbar
  value="{{ value }}" 
  bind:confirm="confirm" 
  bind:cancel="cancel" 
  custom-class="custom-searchbar"/>
```

```javascript
Page({
  data: {
    value: ''
  }
});

```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| placeholder | 输入框placeholder | `String` | `自定义` | `输入文字进行搜索` |
| focus | 输入框是否自动聚焦 | `Boolean` | `true` `false` | `false` |
| value | 输入框内容 | `String` | `自定义`| ` ` |

### Event

| 事件名 | 说明 |
|-----------|-----------|
| bind:confirm | 点击键盘搜索按钮触发, 参数为输入框的内容 |
| bind:cancel | 点击取消按钮触发, 无参数 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

