## Checkbox 复选框

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-checkbox": "path/to/kai-ui/dist/checkbox/index"
}
```

### 代码演示

#### 初始化

```html
<k-checkbox 
  type="{{ checkbox1.type }}"
  checked="{{ checkbox1.checked }}"
  label="{{ checkbox1.label }}"
  bind:change="change1"
  custom-class="custom-checkbox" />
```

```javascript
Page({
  data: {
    checkbox1: {
      type: 'circle',
      checked: false,
      label: '复选框内容',
      disabled: false
    }
  },

  change1 (e) {
    const { checkbox1 } = this.data
    const newObj = Object.assign({}, checkbox1, { checked: e.detail, disabled: e.detail })
    this.setData({
      checkInfo1: 'disabled value ' + e.detail,
      checkbox1: newObj
    })
  }
});
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| type | 复选框类型 | `String` | `circle` `cube` | `circle` |
| label | 复选框提示信息 | `String` | `自定义` | ` ` |
| checked | 复选框选择状态 | `Boolean` | `true` `false` | `false` |
| position | 复选框相对label位置 | `String` | `left` `right` | `left` |
| disabled | 复选框是否禁用 | `Boolean` | `true` `false` | `false` |


### Event

| 类名 | 说明 |
|-----------|-----------|
| change | 复选框状态改变时触发, 参数为改变后复选框状态(`true` `false`) |


### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

