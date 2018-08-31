## Slider 滑块

### 使用指南
在页面中引入组件
```javascript
import Slider from 'kai-ui/Slider'

components = {
  slider: Slider
}
```

### 代码演示

#### 初始化

```html
<template>
  <slider :value.sync="value" max="100" min="0" type="double" componentId="0"/>
</template>
```

#### 案例
```javascript
<template>
  <view class="kai-content">
    <view class="padding-10">
      <view class="padding-10 font-12">基础用法:</view>
      <slider :value.sync="value" componentId="0"/>
      <view class="padding-10 font-12">自定义最大最小值:</view>
      <slider1 :value.sync="value1" max="10" min="5" componentId="1"/>
      <view class="padding-10 font-12">双滑块选择数据范围:</view>
      <slider2 :value.sync="value2" max="100" min="0" type="double" componentId="2"/>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Slider from 'kai-ui/Slider'

export default class RatePage extends wepy.page {
  data = {
    value: 50,
    value1: 8,
    value2: [10, 60]
  }
  components = {
    slider: Slider,
    slider1: Slider,
    slider2: Slider
  }
}
</script>
```

### API

| 参数      | 说明 | 类型 | 可选项 | 默认值 |
| -------- | ------- | ---- | ---- | ----- |
| componentId | 组件id，与该页面中其他滑块组件id不重复 | `String` `Number`  | - | - |
| value    | 当前值 | 单滑块类型为`Number`，双滑块类型为`Array`  | - | - |
| type | 单滑块或者双滑块 | `String`  | `single`,`double` | `single` |
| max | 最大值 | `Number` | - | 100 |
| min |  最小值 |`Number` |  - | 0 |


