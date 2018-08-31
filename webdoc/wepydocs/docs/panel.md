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
<template>
  <panel class="padding-10">
    <view>我是默认的panel</view>
  </panel>
  <panel class="padding-10">
    <view slot="title" class="title">无边框</view>
    <view>我是一个没有边框的panel</view>
  </panel>
</template>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|--------------------------------|-----------|-----------|-------------|
| border | panel边框宽度，例如border-width: 1px 0 1px 0; | `String` | `自定义`| `0` |

