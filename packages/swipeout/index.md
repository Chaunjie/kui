## Swipeout 滑动菜单

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-swipeout": "path/to/kai-ui/minicomponent/swipeout/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。
```html
<k-swipeout>
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
</k-swipeout>
```

### Slot
 参数 | 说明 |
|-----------|-----------|
| content | 滑动内容 |
| action | 操作菜单 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |
