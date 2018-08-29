## NoticeBar 通知栏

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-noticebar": "path/to/kai-ui/dist/noticebar/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```wxml
<k-noticebar text="{{ longText }}" icon="{{ icon }}"/>
```
```javascript
Page({
  data: {
    longText: '',
    icon: true
  },

  onLoad() {
    const text = '近日，俄空军苏-34战斗轰炸机部队在里海地区举行了反舰实弹攻击演练，其中罕见使用了Kh-31AD超音速反舰导弹，明显是针对先前美海军在环太军演中的反舰演习，本图集就此为您简析'
    setTimeout(() => {
      this.setData({
        longText: text
      })
    }, 100)
  }
});
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| text | 通知栏内容 | `String` | ` ` | ` ` |
| icon | 通知栏是否显示图标 | `Boolean` | `true` `false` | `false` |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

