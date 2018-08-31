## Step 步骤条

### 使用指南
在页面中引入组件
```javascript
import Step from 'kai-ui/Step'

components = {
  step: Step
}
```

### 代码演示

#### 初始化

```html
<template>
  <step :stepData.sync="stepData"/>
</template>
```

#### 案例
```javascript
<template>
  <view class="padding-10">
    <view class="padding-10 font-12">竖向步骤条：</view>
    <vstep :stepData.sync="stepData1"/>
  </view>
  <view class="padding-10">
    <view class="padding-10 font-12">横向步骤条：</view>
    <hstep :stepData.sync="stepData2"/>
  </view>
  <view class="padding-10">
    <view class="padding-10 font-12">自定义icon：</view>
    <step :stepData.sync="stepData3"/>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import Step from 'kai-ui/Step'

  export default class StepPage extends wepy.page {
    data = {
      stepData1: {},
      stepData2: {},
      stepData3: {}
    }
    components = {
      vstep: Step,
      hstep: Step,
      step: Step
    }
    onLoad () {
      const steps = [
        {title: '已做完的', content: '2016-07-08'},
        {title: '正在做的', content: '2016-17-08'},
        {title: '即将要做的', content: '这是内容'},
        {title: '即将要做的', content: '2016-17-08'}
      ]
      this.stepData1 = {
        steps: steps,
        current: 1
      }
      this.stepData2 = {
        steps: steps,
        current: 1,
        direction: 'horizontal'
      }
      const steps3 = [
        {title: '已做完的', content: '2016-07-08', iconClass: 'step-icon-bre'},
        {title: '正在做的', content: '2016-17-08', iconClass: 'step-icon-train'},
        {title: '即将要做的', content: '2016-17-08', iconClass: 'step-icon-view'}
      ]
      this.stepData3 = {
        steps: steps3,
        current: 1,
        direction: 'horizontal'
      }
    }
  }
</script>

<style>
  /*以下是自定义icon样式*/
  @font-face {
    font-family: "step-iconfont";  /* project id 804062 */
    src: url('//at.alicdn.com/t/font_804062_pvg9hzszcd.eot');
    src: url('//at.alicdn.com/t/font_804062_pvg9hzszcd.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_804062_pvg9hzszcd.woff') format('woff'),
    url('//at.alicdn.com/t/font_804062_pvg9hzszcd.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_804062_pvg9hzszcd.svg#iconfont') format('svg');
  }
  .step-icon-bre, .step-icon-train, .step-icon-view {
    font-family: "step-iconfont" !important;
    font-size: 12px;
  }
  .step-icon-bre:before {content: "\e6e9";}
  .step-icon-train:before {content: "\e658";}
  .step-icon-view:before {content: "\e645";}
</style>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|--------|-----|
| current | 当前步骤索引 | `Number` |  - | `0` |
| direction | 横向或者竖向布局 | `String` | `vertical` `horizontal` | `vertical` |
| steps | 步骤列表 | `Array` | - | - |

### step 步骤

 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|---|
| title | 标题 | `String` |  - |
| content | 内容 | `String` | - |
| iconClass | 自定义 icon 类名 | `String` | - |


