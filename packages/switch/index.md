## Switch 开关

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-switch": "path/to/kai-ui/minicomponent/switch/index"
}
```

### 代码演示

#### 初始化

```html
<k-switch 
  checked="{{ item.checked }}" 
  disabled="{{ item.disabled }}" 
  loading="{{ item.loading }}" 
  sync="{{ item.sync }}" 
  type="{{ item.type }}" 
  bind:change="change" 
  data-index="{{ i }}"/>
```

```javascript
Page({
  data: {
    item: {
      title: '异步样式',
      checked: false,
      disabled: false,
      sync: true,
      loading: false,
    }
  }
});

```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| checked | 开关状态 | `Boolean` | `true` `false` | `false` |
| disabled | 开关是否禁用 | `Boolean` | `true` `false` | `false` |
| loading | 开关是否显示加载图标(必须搭配sync使用) | `Boolean` | `true` `false` | `false` |
| sync | 开关是否是异步 | `Boolean` | `true` `false` | `false` |
| type | 开关类型 | `String` | `success` `kai` `warn` `danger` | `success` |

### Event

| 事件名 | 说明 |
|-----------|-----------|
| bind:change | 开关组件状态更改时触发, 参数为更改后的状态 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

