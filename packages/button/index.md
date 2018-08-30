## Button 按钮

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-button": "path/to/kai-ui/minicomponent/button/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```html
<k-button name="success" empty="{{ true }}">
  <view>
    <k-icon name="gear" custom-class="btn-icon"/>
    <text>微信支付</text>
  </view>
</k-button>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| name | 按钮类型名 | `String` | `success` `warn` `kai` `danger` | ` ` |
| size | 按钮尺寸 | `String` | `min` `small` `large`  | `large` |
| disabled | 按钮禁用 | `Boolean` | `true` `false` | `false` |
| empty | 按钮镂空 | `Boolean` | `true` `false` | `false` |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

