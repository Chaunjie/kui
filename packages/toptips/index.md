## Toptips 顶部提示

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-toptips": "path/to/kai-ui/dist/toptips/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```wxml
<k-toptips id="toptips"></k-toptips>
```
```javascript
import Toptips from 'path/to/kai-ui/dist/toptips/index';

Page({
  data: {},
  onClick () {
    Toptips.show('#toptips', {content: '自定义提示信息', duration: 3000})
  }
});

```


### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

