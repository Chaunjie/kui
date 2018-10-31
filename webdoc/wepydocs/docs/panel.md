## Panel 面板

### 使用指南
在页面中引入组件
```javascript
import Panel from 'kai-ui/Panel'

components = {
  panel: Panel
}
```

### 代码演示

#### 初始化

```html
<style lang="less" scoped>
  .panel view {
    padding: 10px;
  }
</style>

<template>
  <view class="kai-content">
    <panel>
      <view>默认panel</view>
    </panel>
    <panel>
      <view slot="title" class="title">无边框</view>
      <view>这是一个没有边框的panel</view>
    </panel>
    <panel1>
      <view>这是一个有没有title的panel</view>
    </panel1>
    <panel2 border="1rpx 0 1rpx 0">
      <view slot="title" class="title">这是一个自定义border的panel</view>
      <view>边框为1rpx 0 1rpx 0</view>
    </panel2>
  </view>
</template>

<script>
import wepy from 'wepy'
import panel from 'kai-ui/Panel'

export default class Panel extends wepy.page {
  config = {
    navigationBarTitleText: 'Panel  面板'
  }

  components = {
    panel: panel,
    panel1: panel,
    panel2: panel
  }

  onLoad() {
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| border | panel边框宽度，例如border-width: 1px 0 1px 0; | `String` | —— | 0 |
