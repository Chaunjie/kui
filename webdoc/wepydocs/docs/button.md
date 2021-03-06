## Button 按钮

### 使用指南
在 `app.wpy` 中引入基础样式
```javascript
@import '../node_modules/kai-ui/src/less/index';
```

### 代码演示

#### 案例
```javascript
<template>
  <view class="kai-content">
    <view class="padding-10">
      <button class="btn btn-min">按钮</button>
      <button class="btn btn-min btn-kai">微信支付</button>
      <button class="btn btn-min btn-empty btn-success">微信支付</button>
    </view>
    <view class="padding-10">
      <button class="btn btn-small">按钮</button>
      <button class="btn btn-small btn-success">支付宝支付</button>
      <button class="btn btn-small btn-kai">微信支付</button>
      <button class="btn btn-small btn-danger btn-empty">京东支付</button>
    </view>
    <view class="padding-10">
      <button class="btn ">按钮</button>
      <button class="btn btn-success">按钮</button>
      <button class="btn btn-kai">按钮</button>
      <button class="btn btn-warn btn-empty">按钮</button>
    </view>
    <view class="padding-10">
      <button class="btn btn-large">按钮</button>
      <button class="btn btn-large btn-success">按钮</button>
      <button class="btn btn-large btn-kai">按钮</button>
      <button class="btn btn-large btn-warn btn-empty">按钮</button>
    </view>
    <view class="padding-10">
      <button class="btn btn-small btn-success btn-loading">
       <view class="kai-iconfont kai-icon-loading"></view>
       按钮
     </button>
     <button class="btn btn-large btn-kai btn-loading">
       <view class="kai-iconfont kai-icon-loading"></view>
       按钮
     </button>
     <button class="btn btn-large btn-warn btn-empty btn-loading">
       <view class="kai-iconfont kai-icon-loading"></view>
       按钮
     </button>
   </view>
   <view class="padding-10">
    <button class="btn btn-min" disabled>按钮</button>
    <button class="btn btn-small btn-success btn-empty" disabled>按钮</button>
    <button class="btn btn-kai" disabled>按钮</button>
    <button class="btn btn-large btn-warn" disabled>按钮</button>
  </view>
</view>
</template>

<script>
import wepy from 'wepy'

export default class Button extends wepy.page {
  config = {
    navigationBarTitleText: 'Button 按钮'
  }
  components = {}

  data = {}

  computed = {}

  methods = {}

  events = {}

  onLoad() {}
}
</script>
```
