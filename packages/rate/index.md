## Rate 星级评分

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-rate": "path/to/kai-ui/rate/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。
```html
<k-rate title="这是一个比较长的标题信息" value="{{value}}" desc="{{desc}}" type="vertical" bind:change="rate" />
```

```javascript
Page({
  data: {
    value: 4
    desc: [
      '非常差',
      '差',
      '一般',
      '好',
      '非常好'
    ]
  },
  rate (e) {
    this.setData({
      value: e.detail
    })
  }
})
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|--------|-----|
| value | 当前值 | `Number` | 0-5 | `0` |
| desc | 评分描述 | `Array` | - |  `['1星','2星','3星','4星','5星']`  |
| type | 横向或者竖向布局 | `String` |  `horizontal` `vertical`  | `horizontal` |


### Event

| 事件名 | 说明 |
|-----------|-----------|
| bind:change | 评分改变时触发 |


### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |
