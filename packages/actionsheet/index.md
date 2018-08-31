## Actionsheet 上拉菜单

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-actionsheet": "path/to/kai-ui/minicomponent/actionsheet/index"
}
```

### 代码演示

#### 基础用法
需要传入一个`asData`的数据，对象属性见文档下方表格。

```html
<k-actionsheet
  asData="{{ asData }}"
  bind:select="onSelect"
/>
```

```javascript
Page({
  data() {
    return {
      acData: {
        show: false,
        actions: [
          { name: '禁选' , disabled: true},
          { name: '删除', icon: 'trash', color: 'red' },
          { name: '分享', icon: 'share' }
        ]
      };
  },

  methods: {
    onSelect(event) {
      console.log(event.detail);
    }
  }
});
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| asData | 菜单配置数据 | `Object` | `{}` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:select | 选中选项时触发，禁用或加载状态下不会触发 | event.detail: 选项对应的对象 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

### asData

`API`中的`asData`为一个对象，该对象有以下属性：

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| show | 菜单是否显示 | `Boolean` | `false` |
| actions | 菜单按钮数组 | `Array` | `[]` |

### actions

`asData`中的`actions`为一个数组，该对象有以下属性：

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| name | 按钮显示的字符 | `String` | ` ` |
| disabled | 按钮是否禁止点击 | `Boolean` | `false` |
| icon | 显示的图标 | `String` | ` ` |
| color | 按钮字体和图标颜色 | `String` | ` ` |
