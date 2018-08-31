## Rate 星级评分

### 使用指南
在页面中引入组件
```javascript
import Rate from 'kai-ui/Rate'

components = {
  rate: Rate
}
```

### 代码演示

#### 初始化

```html
<template>
  <rate title="物流服务" :value.sync="value" :desc="desc"/>
</template>
```

#### 案例
```javascript
<template>
  <view class="kai-content">
    <view class="padding-10">
      <view class="font-12">基础用法:</view>
      <rate1 title="描述相符" :value.sync="value1"/>
    </view>
    <view class="padding-10">
      <view class="font-12">自定义评分描述:</view>
      <rate2 title="物流服务" :value.sync="value2" :desc="desc"/>
    </view>
    <view class="padding-10">
      <view class="font-12">竖向布局:</view>
      <rate3 title="这是一个比较长的标题信息" :value.sync="value3" type="vertical"/>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Rate from 'kai-ui/Rate'

export default class RatePage extends wepy.page {
  data = {
    value1: 4,
    value2: 1,
    value3: 2,
    desc: [
      '非常差',
      '差',
      '一般',
      '好',
      '非常好'
    ]
  }
  components = {
    rate1: Rate,
    rate2: Rate,
    rate3: Rate
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|--------|-----|
| componentId | 组件id，与该页面中其他星级评分组件id不重复 | `String` `Number`  | - | - |
| value | 当前值 | `Number` | 0-5 | `0` |
| desc | 评分描述 | `Array` | - |  `['1星','2星','3星','4星','5星']`  |
| type | 横向或者竖向布局 | `String` |  `horizontal` `vertical`  | `horizontal` |


