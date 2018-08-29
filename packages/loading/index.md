## Loading 加载

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-loading": "path/to/kai-ui/dist/loading/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```wxml
<k-loading type="circular" custom-class="inline"/>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| type | 图标形状 | `String` | `circular` `circle` | `circle` |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

