## Folder 折叠面板

### 使用指南
在页面中引入组件
```javascript
import Folder from 'kai-ui/Folder'

components = {
  folder: Folder
}
```

### 代码演示

#### 初始化

```html
<template>
  <folder title="会员信息" componentId="0">
    <view slot="content">
      <view>客户来源：微信公众号</view>
      <view>昵称：江南</view>
      <view>下单数：132</view>
      <view>退款数：2</view>
      <view>购买均价：100</view>
    </view>
  </folder>
</template>
```

#### 案例
```javascript
<template>
  <view class="kai-content">
    <view class="padding-10">
      <folder1 title="会员信息" componentId="0">
        <view slot="content">
          <view>客户来源：微信公众号</view>
          <view>昵称：江南</view>
          <view>下单数：132</view>
          <view>退款数：2</view>
          <view>购买均价：100</view>
        </view>
      </folder1>
      <view class="padding-10"></view>
      <folder2 title="订单信息" componentId="1">
        <view slot="content">
          忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
          忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。忆江南，江南好，风景旧曾谙，日出江花红胜火，春来江水绿如蓝，能不忆江南。
        </view>
      </folder2>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Folder from 'kai-ui/Folder'

export default class FolderPage extends wepy.page {
  components = {
    folder1: Folder,
    folder2: Folder
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 |  默认  |
| --- | ---- | ------- |  ---- |
| componentId | 组件id，与该页面中其他折叠面板组件id不重复 | `String` `Number` | - |
| title | 标题 | `String` | - |
| content | 内容插槽 | `slot` | - |
