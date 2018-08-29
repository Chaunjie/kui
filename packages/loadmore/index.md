## LoadMore 更多

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  k-loadmore": "path/to/kai-ui/dist/loadmore/index
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```wxml
<k-loadmore more="{{more2}}"/>
```

```javascript
Page({
  data: {
    more1: {
      type: true,
      loading: '加载中...',
      loaded: '加载完成'
    },
    more2: {
      type: false,
      loading: '加载中',
      loaded: '我们是有底线的'
    }
  },

  onLoad() {}
});
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| more | 更多配置参数 | `Object` | `{} ` |

#### more

`API`中的`more`为一个对象，该对象有以下属性：

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 是否需要加载中图标 | `Boolean` | `false` |
| loading | 加载中内容 | `String` | ` ` |
| loaded | 加载后显示内容 | `String` | ` ` |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

