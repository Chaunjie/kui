## Step 步骤条

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-step": "path/to/kai-ui/step/index",
  "k-step-item": "path/to/kai-ui/step-item/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。
```html
<k-step current="{{stepData.current}}" >
  <k-step-item wx:for="{{stepData.steps}}" wx:for-item="item" wx:key="index" step="{{item}}">
  </k-step-item>
</k-step>
```

#### 自定义 icon 用法

```html
<k-step current="{{stepData.current}}" direction="{{stepData.direction}}">
  <k-step-item wx:for="{{stepData.steps}}" wx:for-item="item" wx:key="index" step="{{item}}" custom-class="{{item.iconClass}}">
  </k-step-item>
</k-step>
```

```javascript
Page({
  data: {
    stepData: {}
  },
  onLoad () {
    const steps = [
      {title: '已做完的', content: '2016-07-08', iconClass: 'step-icon-bre'},
      {title: '正在做的', content: '2016-17-08', iconClass: 'step-icon-train'},
      {title: '即将要做的', content: '2016-17-08', iconClass: 'step-icon-view'}
    ]
    let stepData = {
      steps: steps,
      current: 1,
      direction: 'horizontal'
    }
    this.setData({
      stepData: stepData
    })
  }
})
```

```less
/* 自定义 icon 样式 */
@font-face {
  font-family: "step-iconfont";
  src: url('//at.alicdn.com/t/font_804062_pvg9hzszcd.ttf') format('truetype');
}
.step-icon-bre, .step-icon-train, .step-icon-view {
  font-family: "step-iconfont" !important;
  font-size: 12px;
}
.step-icon-bre:before {content: "\e6e9";}
.step-icon-train:before {content: "\e658";}
.step-icon-view:before {content: "\e645";}
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|--------|-----|
| current | 当前步骤索引 | `Number` |  - | `0` |
| direction | 横向或者竖向布局 | `String` | `vertical` `horizontal` | `vertical` |
| step | 步骤 | `Object` | - | - |

### step
 参数 | 说明 | 类型 |  默认值 |
|-----------|-----------|-----------|---|
| title | 标题 | `String` |   - |
| content | 内容 | `String` |  - |
| iconClass | 自定义 icon 类名，需通过 custom-class 传入 | `String` | - |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |
