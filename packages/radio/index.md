## Radio 单选框

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-radio": "path/to/kai-ui/minicomponent/radio/index"
}
```

### 代码演示

#### 初始化

```html
<k-radio
  type="{{ radio.type }}"
  checked="{{ radio.checked }}"
  label="{{ radio.label }}"
  disabled="{{ radio.disabled }}"
  bind:change="change"
  custom-class="custom-radio"/>
```

```javascript
Page({
  data: {
    radio: {
      type: 'circle',
      checked: false,
      label: '单选框内容',
      disabled: false
    }
  },

  change (e) {
    const { radio } = this.data
    const newObj = Object.assign({}, radio, { checked: e.detail })
    this.setData({
      checkInfo: 'checked value ' + e.detail,
      radio: newObj
    })
  }
});
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| type | 单选框类型 | `String` | `circle` `cube` | `circle` |
| label | 单选框提示信息 | `String` | `自定义` | ` ` |
| checked | 单选框选择状态 | `Boolean` | `true` `false` | `false` |
| position | 单选框相对label位置 | `String` | `left` `right` | `left` |
| disabled | 单选框是否禁用 | `Boolean` | `true` `false` | `false` |


### Event

| 事件名 | 说明 |
|-----------|-----------|
| bind:change | 单选框更改后状态为true触发, 参数为改变后单选框状态(`true`) |


### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

