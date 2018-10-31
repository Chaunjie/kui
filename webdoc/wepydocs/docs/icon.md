## Icon 图标

### 使用指南
在页面中引入组件
```javascript
import Icon from 'kai-ui/Icon'

components = {
  icon: Icon
}
```

### 代码演示

#### 初始化

```html
<template>
  <icon :type="item" :event="index % 2 ? 'icon-tap' : ''"></icon>
</template>
```

#### 回调
```javascript
events = {
  'icon-tap': function () {
    console.log('点击事件回调')
  }
}
```

#### 案例
```javascript
<style lang="less">
  .icon-container{
    background-color:#fff;
  }
  .icon-block{
    background-color:#fff;
    padding: 20px 0;
    .kai-iconfont {
      font-size:30px;
      margin-bottom:20px;
      color:#999;
    }
    .icon-title{
      font-size:12px;
      color:#999;
      text-align: center;
    }
    > view{
      width:100%;
      display:flex;
      align-items:center;
      justify-content: center;
    }
  }
</style>
<template>
  <view class="kai-content icon-container layout">
    <repeat for="{{list}}" index="index" item="item" key="key">
      <view class="col col-6 icon-block" >
        <view>
          <icon :type.sync="item" :event.sync="index % 2 ? 'icon-tap' : ''"></icon>
        </view>
        <view>
          <text class="icon-title">{{item}}</text>
        </view>
      </view>
    </repeat>
  </view>
</template>

<script>
import wepy from 'wepy'
import icon from 'kai-ui/Icon'

export default class Icon extends wepy.page {
  config = {
    navigationBarTitleText: 'Icon 图标'
  }
  components = {
    icon: icon
  }

  data = {
    list: [
      'error', 'tick', 'broadcast', 'back', 'calendar', 'camera', 'cart',
      'close', 'comment', 'success', 'date', 'display',
      'down', 'edit', 'flag', 'forward', 'gear',
      'hide', 'home', 'image', 'info', 'laud',
      'left', 'like', 'location', 'lock', 'mail',
      'map', 'menu', 'minus', 'mobile', 'more',
      'my', 'paper', 'pencil', 'phone', 'plus',
      'question', 'recovery', 'right', 'search', 'share',
      'star', 'top', 'trash', 'unlock', 'video', 'closebg',
      'stargap', 'starbg'
    ]
  }

  events = {
    'icon-tap': function () {
      console.log(111)
    }
  }

  onLoad() {}
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| type | 图标的kai-iconfont(例如: 类名为kai-icon-plus type就为plus) | `String` | `error`, `tick`, `broadcast`, `back`, `calendar`, `camera`, `cart`, `close`, `comment`, `success`, `date`, `display`,  `down`, `edit`, `flag`, `forward`, `gear`, `hide`, `home`, `image`, `info`, `laud`, `left`, `like`, `location`, `lock`, `mail`, `map`, `menu`, `minus`, `mobile`, `more`, `my`, `paper`, `pencil`, `phone`, `plus`, `question`, `recovery`, `right`, `search`, `share`, `stargap`, `starbg` | ` ` |
| detail | 事件回调名 | `String` | —— | ` ` |

### Event

| 事件名 | 说明 |
|-----------|-----------|
| icon-tap| 点击图片事件回调 无参 |
