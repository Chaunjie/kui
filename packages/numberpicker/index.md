## NumberPicker 数字输入框

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-numberpicker": "path/to/kai-ui/dist/numberpicker/index"
}
```

### 代码演示

#### 初始化

```html
<k-numberpicker 
  num="{{ number[2] }}" 
  step="{{ config2.step }}" 
  min="{{ config2.min }}" 
  max="{{ config2.max }}" 
  bind:change="change" 
  data-index="2"/>
```

```javascript

Page({
  data: {
    number: [1, 2, 3],
    config2: {
      step: 2,
      min: 1,
      max: 20
    }
  },

  change (e) {
    const num = e.detail
    const index = +e.currentTarget.dataset.index
    const { number } = this.data
    const arr = [...number]
    arr[index] = num
    this.setData({
      number: arr
    })
  },

  onLoad() {}
});
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| num | 输入框数值 | `Number` `String` | `自定义` | `0` |
| size | 尺寸类型 | `String` | `large` ` ` | ` ` |
| step | 步长 | `Number` | `自定义` | `1` |
| min | 最小值 | `Number` | `自定义` | `1` |
| max | 最大值 | `Number` | `自定义` | `99999` |


### Event

| 事件名 | 说明 |
|-----------|-----------|
| bind:change | 组件值改变后触发, 参数为改变后的值 |


### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

