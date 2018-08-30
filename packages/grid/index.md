## Grid 宫格

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
    "k-grid": "path/to/kai-ui/minicomponent/grid/index",
    "k-grid-item": "path/to/kai-ui/minicomponent/grid-item/index"
  }
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```html
<k-grid col="16">
  <k-grid-item wx:for="{{ [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] }}" wx:for-item="item" wx:key="index">
    <view slot="content">
      <view class="title">标题</view>
      <view class="content">内容</view>
    </view>
  </k-grid-item>
</k-grid>
```

#### 带图标用法

```html
<k-grid col="9" bind:tap="onClick">
  <k-grid-item wx:for="{{ [0,1,2,3,4,5,6,7,8] }}" wx:for-item="item" wx:key="index">
    <view slot="content">
      <k-icon name="{{iconArr[index]}}" custom-class="custom-icon"/>
      <view class="content">{{ iconArr[index] }}</view>
    </view>
  </k-grid-item>
</k-grid>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| col | 宫格列数 | `Number` | `9` `16`  | `9` |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| content | 宫格自定义内容 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

