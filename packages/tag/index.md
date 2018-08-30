## Tag 标记

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-tag": "path/to/kai-ui/minicomponent/tag/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```html
<k-tag 
  type="{{ item.type }}" 
  wx:for="{{ types }}" 
  wx:for-item="item" 
  wx:key="index" 
  custom-class="single-tag" 
  empty="{{item.empty}}">
  {{ item.text }}
</k-tag>
<k-tag 
  type="{{ item.type }}" 
  wx:for="{{ types1 }}" 
  wx:for-item="item" 
  wx:key="index" 
  custom-class="single-tag" 
  empty="{{item.empty}}">
  {{ item.text }}
</k-tag>
```
```javascript
Page({
  data: {
    types: [
      {
        type: 'plain',
        text: '默认'
      },
      {
        type: 'primary',
        text: '返现'
      },
      {
        type: 'danger',
        text: '会员折扣'
      },
      {
        type: 'warn',
        text: '返现'
      },
      {
        type: 'disabled',
        text: '返现不可用'
      }
    ],
    types1: [
      {
        type: 'plain',
        text: '默认',
        empty: true
      },
      {
        type: 'primary',
        text: '返现',
        empty: true
      },
      {
        type: 'danger',
        text: '会员折扣',
        empty: true
      },
      {
        type: 'warn',
        text: '返现',
        empty: true
      },
      {
        type: 'disabled',
        text: '返现不可用',
        empty: true
      }
    ]
  },

  onLoad() {}
});
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| type | 标记类型 | `String` | `plain` `primary` `danger` `warn` `disabled`| `plain` |
| empty | 是否是镂空用法 | `Boolean` | `true` `false` | `false` |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

