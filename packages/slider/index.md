## Slider 滑块

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-slider": "path/to/kai-ui/minicomponent/slider/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。
```html
<k-slider value="{{value}}" bind:change="slider"/>
```

#### 双滑块用法

```html
<k-slider value="{{value2}}" max="100" min="0" type="double" bind:change="slider2"/>
```

```javascript
Page({
  data: {
    value: 50,
    value2: [10, 60]
  },
  slider (e) {
    this.setData({
      value: e.detail
    })
  },
  slider2 (e) {
    this.setData({
      value2: e.detail
    })
  }
})
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|--------|-----|
| value | 当前值 | 单滑块类型为`Number`，双滑块类型为`Array` |  - | `0` |
| type | 单滑块或者双滑块 | `String` | `single` `double` | `single` |
| max | 最大值 | `Number` |  - | `100` |
| min | 最小值 | `Number` |  - | `0` |


### Event

| 事件名 | 说明 |
|-----------|-----------|
| bind:change | 滑块位置改变时触发 |


### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |
