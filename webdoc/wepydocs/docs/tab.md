## Tab 标签

### 使用指南
在页面中引入组件
```javascript
import Tab from 'kai-ui/Tab'

components = {
  tab: Tab
}
```

### 代码演示

#### 初始化

```html
<template>
  <tab @bindChange.user="change"/>
</template>
```

#### 调用
```javascript
this.$invoke('tab', 'doInitTabData', this.tabData)
```

#### 案例
```javascript
<template>
  <tab-scroll @bindChange.user="change"/>
</template>
<script>
import Tab from 'kai-ui/Tab'
export default class Index extends wepy.page {
  components = {
    'tab-scroll': Tab
  }
  data = {
    tab2: {
      list: [{id: 1, title: '标签1'}, {id: 2, title: '标签2'}, {id: 3, title: '标签3'}, {id: 4, title: '标签4'}, {id: 5, title: '标签5'}, {id: 6, title: '标签6'}, {id: 7, title: '标签7'}, {id: 8, title: '标签8'}],
      scroll: true,
      selectedId: 3,
      class: 'tab-success'
    }
  }
  methods = {
    change (res) {
      this.tab2.selectedId = res
      this.$apply()
    }
  }
  onLoad () {
    const {tab2} = this
    this.$invoke('tab-scroll', 'doInitTabData', tab2)
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| class | tab自定义样式 | `String` |`-` | `-` |
| selectedId | tab选择的item的id | `Number` `String` |`-` | `-` |
| scroll | 是否要求支持滚动 | `Boolean` |`true` `false` | `false` |
| list | tab显示的数据 | `Array` |`-` | `[]` |

### list
Api list结构

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| id | item id | `String` `Number` |`-` | `-` |
| title | item 内容 | `String` |`-` | `-` |

### Event

| 事件名 | 说明 | 
|---------------------|----------------------------|
| @bindChange.user | 选择item时触发, 回传参数为当前item id |

