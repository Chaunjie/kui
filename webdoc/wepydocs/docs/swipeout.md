## Swipeout 滑动菜单

### 使用指南
在页面中引入组件
```javascript
import Swipeout from 'kai-ui/Swipeout'

components = {
  swipeout: Swipeout
}
```

### 代码演示

#### 初始化

```html
<template>
  <swipeout componentId="0">
    <view slot="content">
      <view class="text">
        忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
      </view>
    </view>
    <view slot="action">
      <view class="action-btn btn1">移入收藏夹</view>
      <view class="action-btn btn2">删除</view>
    </view>
  </swipeout>
</template>
```

#### 案例
```javascript
<template>
  <view class="kai-content">
    <view class="padding-10 font-12">
      <view class="padding-10">基础用法：</view>
      <swipeout1 componentId="0">
        <view slot="content">
          <view class="text">
            <view>向左滑动试试：）</view>
            忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
            忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
            忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          </view>
        </view>
        <view slot="action">
          <view class="action-btn btn1">移入收藏夹</view>
          <view class="action-btn btn2">删除</view>
        </view>
      </swipeout1>
      <view class="padding-10"></view>
      <swipeout2 componentId="1">
        <view slot="content">
          <view class="text">
            <view>向左滑动试试：）</view>
            忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          </view>
        </view>
        <view slot="action">
          <view class="action-btn btn0">找相似</view>
          <view class="action-btn btn1">移入收藏夹</view>
          <view class="action-btn btn2">删除</view>
        </view>
      </swipeout2>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Swipeout from 'kai-ui/Swipeout'

export default class SwipeoutPage extends wepy.page {
  components = {
    swipeout1: Swipeout,
    swipeout2: Swipeout
  }
}
</script>

<style lang="less">
  .text {
    padding: 10px;
  }
  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50px;
    padding: 0 5px;
    font-size: 14px;
    color: #fff;
  }
  .btn1 {
    background: #f40;
  }
  .btn2 {
    background: #ccc;
  }
  .btn0 {
    background: #f80;
  }
</style>
```

### API

| 参数      |  描述   | 类型 |   默认值 |
| -------- | ------- | ----- |  -------- |
| componentId| 组件id，与该页面中其他滑动菜单组件id不重复 | `String` `Number` | - |
| content    | 滑动内容 | `slot`  | - |
| action     | 操作菜单 | `slot`  | - |

