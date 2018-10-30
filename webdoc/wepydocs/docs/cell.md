## Cell 列表

### 使用指南
在页面中引入组件
```javascript
import cell from 'kai-ui/Cell'
import cellGroup from 'kai-ui/CellGroup'

components = {
  cell: cell,
  cellgroup: cellGroup
}
```

### 代码演示

#### 初始化

```html
<template>
  <cellgroup custom-class="single-cellgroup">
    <block>
      <cell :title="item.title" :subtitle="item.subtitle" :arrow="item.arrow" :access="item.access"></cell>
    </block>
  </cellgroup>
</template>
```

#### 回调
```javascript
events = {
  'item-tap': (item) => {
    console.log(item)
  }
}
```

#### 案例
```javascript
<style lang="less">
  .single-cellgroup {
    margin-bottom: 10px;
  }
  .single-cellgroup .cell-class > view:last-of-type{
    font-size: 10px;
  }
  .title-new{
    display: inline-block;
    margin-right: 5px;
  }
  .title-text{
    color: red;
  }
  .icon{
    display: inline-block;
    margin-right: 5px;
  }
</style>
<template>
  <view class="kai-content">
    <repeat for="{{cellData}}" index="i" item="item" key="row-{{index}}">
      <panel custom-class="panel-container">
        <view slot="title" class="title">{{item.panelTitle}}</view>
        <cellgroup custom-class="single-cellgroup">
          <block>
            <cell :title="item.title" :detail="item.detail" :arrow="item.arrow" :access="item.access" :item="item"></cell>
            <cell :title="item.title" :subtitle="item.subtitle" :arrow="item.arrow" :access="item.access"></cell>
          </block>
        </cellgroup>
      </panel>
    </repeat>

    <panel custom-class="panel-container">
      <view slot="title" class="title">高级用法</view>
      <cellgroup1 custom-class="single-cellgroup">
        <block>
        <cell1 detail="自定义内容" :access="arrow" :arrow="arrow">
          <view slot="title">
            <icon type="location" class="icon"/>
            <view class="title-new">搜索</view>
            <tag type="danger" custom-class="single-tag">标签</tag>
          </view>
        </cell1>
        <cell2 title="单元格" arrow="{{ true }}">
          <view slot="detail">
            <switch-type
              :switchItem.sync="switchItem"
              @onChange.user="change"/>
          </view>
        </cell2>
        <cell3 title="标题" custom-class="cell-class" detail="自定义内容样式" :arrow="arrow" :access="arrow"></cell3>
      </block>
      </cellgroup1>
    </panel>
  </view>
</template>

<script>
import wepy from 'wepy'
import cellGroup from 'kai-ui/CellGroup'
import cell from 'kai-ui/Cell'
import panel from 'kai-ui/Panel'
import Switch from 'kai-ui/Switch'
import icon from 'kai-ui/Icon'
import tag from 'kai-ui/Tag'

export default class Cell extends wepy.page {
  config = {
    navigationBarTitleText: 'Cell 列表'
  }

  components = {
    cell: cell,
    cell1: cell,
    cell2: cell,
    cell3: cell,
    panel: panel,
    cellgroup: cellGroup,
    cellgroup1: cellGroup,
    'switch-type': Switch,
    icon: icon,
    tag: tag
  }

  data = {
    arrow: true,
    cellData: [
      {
        panelTitle: '基础用法',
        title: '标题',
        subtitle: '自定义内容',
        arrow: true,
        detail: '内容'
      },
      {
        panelTitle: '带图标用法',
        title: '标题',
        subtitle: '自定义内容',
        arrow: true,
        detail: '内容',
        access: true
      },
      {
        panelTitle: '带箭头用法',
        title: '标题',
        subtitle: '自定义内容',
        arrow: true,
        detail: '内容',
        access: true
      }
    ],
    switchItem: {
      checked: true,
      disabled: false,
      componentId: 'switch1'
    }
  }

  computed = {}

  methods = {
    change (e) {
      console.log(e)
      console.log(e)
      this.switchItem.checked = e.checked
      this.$apply()
    }
  }

  events = {
    'item-tap': (item) => {
      console.log(item)
    }
  }

  onLoad() {
  }
}
</script>
```

### API

cell API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| title | 列表显示的标题 | `String` | —— | ` ` |
| detail | 列表右边显示内容 | `String` | —— | ` ` |
| subtitle | 左边显示的内容 | `String` | —— | ` ` |
| access | 是否显示右箭头 | `Boolean` | `false` `true` | ` ` |
| arrow | 是否显示右边模块 | `Boolean` | `false` `true` | `false` |
| item | cell项全部数据 | `Object` | —— | {} |

Slot

| 名称 | 说明 |
|-----------|-----------|
| title | 列表标题插槽 |
| detail | 列表右边内容插槽 |

### Event

| 事件名 | 说明 |
|-----------|-----------|
| icon-tap| 点击列表事件回调 返回参数item |