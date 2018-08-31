## Panel 面板

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
    "k-panel": "path/to/kai-ui/minicomponent/panel/index"
  }
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```html
<k-panel title="标题"  custom-class="panel-container">
  <view style="padding: 15px;background-color: #fff;">内容</view>
</k-panel>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 面板标题 | `String` | ` ` |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

