## Layout 布局

### 使用指南
在 `app.wpy` 中引入基础样式
```js
@import '../node_modules/kai-ui/src/less/index';
```

### 代码演示

#### 初始化

```html
<template>
  <view class="layout layout-list">
    <view class="col col-4">4</view>
    <view class="col col-4 col-offset-4">4 4</view>
    <view class="col col-8 col-offset-4">4 8</view>
  </view>
</template>
```

