## Popup 弹出层

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-popup": "path/to/kai-ui/dist/popup/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```html
<k-popup 
  show="{{popData.showPopup}}" 
  position="{{popData.position}}" 
  maskHide="{{popData.maskHide}}">
</k-popup>
```
```javascript
Page({
  data: {
    popData: {
      showPopup: false,
      position: 'center',
      maskHide: false
    }
  }
});
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| position | 弹出框位置 | `String` | `top` `right` `bottom` `left` `center`| `center` |
| show | 弹出框是否显示 | `Boolean` | `true` `false` | `false` |
| maskHide | 遮罩层点击是否有效 | `Boolean` | `true` `false` | `false` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:click | 遮罩层点击是触发 | event.detail: 选项对应的对象 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

