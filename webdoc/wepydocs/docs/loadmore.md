## LoadMore 加载更多

### 使用指南
在页面中引入组件
```javascript
import Loadmore from 'kai-ui/Loadmore'

components = {
  loadmore: Loadmore
}
```

### 代码演示

#### 初始化

```html
<template>
  <loadmore :more.sync="more"></loadmore>
</template>
```

#### 案例
```javascript
<style lang="less">
  .title {
    font-size: 12px;
  }
  </style>
  <template>
    <view class="kai-content">
      <view class="title padding-10">加载中</view>
      <loadmore1 :more.sync="more1"></loadmore1>
      <view class="title padding-10">加载完成</view>
      <loadmore2 :more.sync="more2"></loadmore2>
    </view>
  </template>

  <script>
  import wepy from 'wepy'
  import Loadmore from 'kai-ui/Loadmore'

  export default class Loadmore extends wepy.page {
    config = {
      navigationBarTitleText: 'loadmore'
    }

    components = {
      loadmore1: loadmore,
      loadmore2: loadmore
    }

    data = {
      more1: {
        type: true,
        loading: 'loading',
        loaded: '加载完成'
      },
      more2: {
        type: false,
        loading: '加载中',
        loaded: '我们是有底线的'
      }
    }

    computed = {}

    methods = {
    }

    events = {
    }

    onLoad() {
    }
  }
  </script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|-------------------------|-----------|-----------|-------------|
| more | 加载更多数据配置，包括支持类型、加载中文案、加载完成文案 | `Object` | `自定义` | `{}` |

### more
  Api more参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|-------------------------|-----------|-----------|-------------|
| type | true: 加载中, false: 加载完成 | `Boolean` | `true` `false` | `false` |
| loading | 加载中文案 | `String` | `自定义` | `加载中` |
| loaded | 加载完成文案 | `String` | `自定义` | `加载完成 ` |
