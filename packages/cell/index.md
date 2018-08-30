## Cell 列表

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
    "k-cell-group": "path/to/kai-ui/minicomponent/cell-group/index",
    "k-cell": "path/to/kai-ui/minicomponent/cell/index"
  }
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```html
<k-cell-group custom-class="single-cell-group">
  <k-cell title="标题" detail="内容" arrow="{{ true }}"></k-cell>
  <k-cell title="标题" subtitle="自定义内容" arrow="{{ true }}"></k-cell>
</k-cell-group>
```

#### 示例

```html
<k-cell-group custom-class="single-cell-group">
  <k-cell detail="自定义内容" arrow="{{ true }}" access="{{ true }}">
    <view slot="title">
      <k-icon name="location" class="icon"/>
      <view class="title-new">搜索</view>
      <k-tag type="danger" custom-class="single-tag">标签</k-tag>
    </view>
  </k-cell>
  <k-cell title="单元格" arrow="{{ true }}">
    <view slot="detail">
      <k-switch
        checked="{{ item.checked }}" 
        disabled="{{ item.disabled }}" 
        bind:change="change"/>
    </view>
  </k-cell>
  <k-cell title="标题" custom-class="cell-class" detail="自定义内容样式" arrow="{{ true }}" access="{{ true }}"></k-cell>
</k-cell-group>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 列表显示的标题 | `String` | ` ` |
| detail | 列表右边显示内容 | `String` | ` ` |
| subtitle | 左边显示的内容 | `String` | ` ` |
| access | 是否显示右箭头 | `Boolean` | `false` |
| arrow | 是否显示右边模块 | `Boolean` | `false` |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| title | 列表标题插槽 |
| detail | 列表右边内容插槽 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

