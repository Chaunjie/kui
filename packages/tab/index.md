## Tab 标签

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-tab": "path/to/kai-ui/minicomponent/tab/index"
}
```

### 代码演示

#### 基础用法
需要传入的属性见文档下方表格。

```html
<k-tab id="tab"/>
```
```javascript
import Tab from 'path/to/kai-ui/minicomponent/tab/index';

Page({
  data: {
    tabData: {
      list: [],
      scroll: false,
      selectedId: '',
      class: 'tab-success'
    }
  },

  onLoad() {
    const {tabData} = this.data
    const tabnew = Object.assign({}, tabData, {list: [{id: 1, title: '标签1'}, {id: 2, title: '标签2'}, {id: 3, title: '标签3'}, {id: 4, title: '标签4'}, {id: 5, title: '标签5标签标签'}, {id: 6, title: '标签6'}, {id: 7, title: '标签7'}, {id: 8, title: '标签8'}], selectedId: 3, scroll: true})
    Tab._init('#tab', tabnew)
  }
});
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| selectedId | 选中的id | `String` `Number` | ` ` | ` ` |
| scroll | 横向是否出现滚动条 | `Boolean` | `true` `false` | `false` |
| class | 显示类型 | `String` | `tab-success` `tab-kai` `tab-danger` `tab-blue` `tab-gray` | ` ` |
| list | 显示标签列表 | `Array` | ` `  | `[] ` |

### list
API中list对象

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| id | 标签id | `Number` | ` ` | ` ` |
| title | 标签内容 | `String` | ` ` | ` ` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:select | 选中选项时触发| event.detail: 选项对应的对象 |


### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

