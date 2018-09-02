## Folder 折叠面板

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-folder": "path/to/kai-ui/folder/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```html
<k-folder title="会员信息">
  <view slot>
    <view>客户来源：微信公众号</view>
    <view>昵称：江南</view>
    <view>下单数：132</view>
    <view>退款数：2</view>
    <view>购买均价：100</view>
  </view>
</k-folder>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 标题 | `String` | - |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 内容插槽 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

