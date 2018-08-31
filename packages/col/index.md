## Layout 布局

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
    "k-col": "path/to/kai-ui/minicomponent/col/index"
  }
```

### 代码演示

#### 基础用法
需要传入`col` `offset`，属性详情见文档下方表格。

```html
<k-col col="6" offset="6" custom-class="col-container">col:6 offset:6</k-col>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| col | 栅格列数 | `Number` | ` ` |
| offset | 居左列数 | `Number` | `0` |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

