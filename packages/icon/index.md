## Icon 图标

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-icon": "path/to/kai-ui/dist/icon/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```html
<k-icon name="{{ item }}" custom-class="custom-icon"></k-icon>
```

```javascript
Page({
  data: {
    iconArr: [
      'error', 'tick', 'broadcast', 'back', 'calendar', 'camera', 'cart',
      'close', 'comment', 'success', 'date', 'display',
      'down', 'edit', 'flag', 'forward', 'gear',
      'hide', 'home', 'image', 'info', 'laud',
      'left', 'like', 'location', 'lock', 'mail',
      'map', 'menu', 'minus', 'mobile', 'more',
      'my', 'paper', 'pencil', 'phone', 'plus',
      'question', 'recovery', 'right', 'search', 'share',
      'star', 'top', 'trash', 'unlock', 'video', 'closebg'
    ]
  },
  onClick () {
    console.log('点击图标')
  },
  onLoad() {}
});
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| name | 图标名 | `String` | `error` `tick` `broadcast` `back` `...`| ` ` |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

