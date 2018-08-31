## Tag 标记

### 使用指南
在页面中引入组件
```javascript
import Tag from 'kai-ui/Tag'

components = {
  tag: Tag
}
```

### 代码演示

#### 初始化

```html
<template>
  <view class="kai-content">
    <view class="panel padding-10">
      <view class="list list-last-child">
        <repeat for="{{types}}" index="i" item="item">
          <tags :type="item.type">{{item.text}}</tags>
        </repeat>
      </view>
    </view>
  </view>
</template>
```

#### 案例
```javascript
<style lang="less">
.tag{
  margin-right:10px;
}
</style>
<template>
  <view class="kai-content">
    <view class="panel padding-10">
      <view class="list list-last-child">
        <repeat for="{{types}}" index="i" item="item">
          <tags :type="item.type">{{item.text}}</tags>
        </repeat>
      </view>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'

import Tag from 'kai-ui/Tag'
export default class Tag extends wepy.page {
  config = {
    navigationBarTitleText: 'Tag 标记'
  }
  components = {
    tags: Tags
  }

  data = {
    types: [
      {
        type: 'plain',
        text: '默认'
      },
      {
        type: 'primary',
        text: '返现'
      },
      {
        type: 'danger',
        text: '会员折扣'
      },
      {
        type: 'warn',
        text: '返现'
      },
      {
        type: 'disabled',
        text: '返现不可用'
      }
    ]
  }

  computed = {}

  methods = {}

  events = {}

  onLoad() {}
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|-------------------------|-----------|-----------|-------------|
| type | 标签类型 | `String` |`-` `plain` `primary` `danger` `warn` `disabled` | `-` |

