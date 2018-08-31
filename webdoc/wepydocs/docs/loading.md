## Loading 加载

### 使用指南
在页面中引入组件
```javascript
import Loading from 'kai-ui/Loading'

components = {
  loading: Loading
}
```

### 代码演示

#### 初始化

```html
<template>
  <loading type="circle" size="big"/>
</template>
```

#### 案例
```javascript
<style lang="less"></style>
  <template>
    <view class="kai-content">
      <view class="padding-10">
        <loading type="circle" size="big"/>
      </view>
    </view>
  </template>

  <script>
  import wepy from 'wepy'
  import Loading from 'kai-ui/Loading'

  export default class Loading extends wepy.page {
    config = {
      navigationBarTitleText: 'Loading 加载中'
    }

    components = {
      Loading: Loading
    }
  }
  </script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|-------------------------|-----------|-----------|-------------|
| type | circle : 圆形图案, circular: 菊花图案 | `String` | `circle` `circular` | `circle` |
| size | 加载图案尺寸 | `String` | `small` `big` | `small` |
| class | 自定义样式 | `String` | `自定义` | `-` |

