## Select 选择

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-select": "path/to/kai-ui/dist/select/index"
}
```

### 代码演示

#### 初始化

```html
<k-select selectData="{{ selectData }}" bind:select="select"/>
```

```javascript

Page({
  data: {
    selectData: {
      list: [{name: '选择1'}, {name: '选择2'}, {name: '选择3'}],
      selectIndex: 0,
      type: 'success'
    }
  },

  select (e) {
    const index = e.detail
    const { selectData } = this.data
    this.setData({
      selectInfo: '点击了 ' + selectData.list[index].name
    })
  }
});

```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| selectData | 选择组件配置信息 | `Object` | `自定义` | `{}` |

### selectData
  API selectData对象

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| list | 选择项数组 | `Array` | `自定义` | `[]` |
| selectIndex | 默认选择项索引 | `Number` | `自定义` | ` ` |
| type | 选择项类型 | `String` | `success` `danger` `kai` | ` ` |
| position |  | `String` | `left` `right` | `right` |

### list
  selectData list 数组

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| name | 选择项内容 | `String` | `自定义` | ` ` |

### Event

| 类名 | 说明 |
|-----------|-----------|
| select | 点击选择项触发, 参数为选择项索引 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

