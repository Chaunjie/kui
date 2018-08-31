## Select 选择

### 使用指南
在页面中引入组件
```javascript
import Select from 'kai-ui/Select'

components = {
  select: Select
}
```

### 代码演示

#### 初始化

```html
<template>
  <view class="kai-content">
    <view class="panel">
      <select :selectData.sync="selectData"/>
    </view>
    <view class="panel">
      <select1 :selectData.sync="selectData1"/>
    </view>
    <button class="btn btn-success" catchtap="changeSelect">切换icon位置</button>
  </view>
</template>
```

#### 调用
```javascript
this.$invoke('dialog', 'show', options).then((value) => {
  console.log(value) // 返回按钮的索引
}, () => {
  console.log('reject')
})
```

#### 案例
```javascript
<style lang="less"></style>
<template>
  <view class="kai-content">
    <view class="panel">
      <select :selectData.sync="selectData"/>
    </view>
    <view class="panel">
      <select1 :selectData.sync="selectData1"/>
    </view>
    <button class="btn btn-success" catchtap="changeSelect">切换icon位置</button>
  </view>
</template>

<script>
import wepy from 'wepy'
import select from 'kai-ui/Select'

export default class SelectPage extends wepy.page {
  config = {
    navigationBarTitleText: 'Select 选择'
  }

  components = {
    select: select,
    select1: select
  }

  data = {
    selectData: {
      id: 0,
      list: [{name: '选择1'}, {name: '选择2'}, {name: '选择3'}],
      selectIndex: 0,
      class: 'select-success'
    },
    selectData1: {
      id: 1,
      list: [{name: '选择1'}, {name: '选择2'}],
      selectIndex: 1,
      class: 'select-danger',
      event: 'select-test'
    },
    position: ''
  }

  computed = {}

  methods = {
    changeSelect () {
      const {selectData1} = this
      this.position = this.position === 'left' ? 'right' : 'left'
      selectData1.class = 'select-danger select-' + this.position
    }
  }

  events = {
    'select-item': (data) => {
      console.log('item' + data)
    },
    'select-test': (data) => {
      console.log('test' + data)
    }
  }

  onLoad() {}
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| selectData | 组件传入一个参数对象 | `Object` |`-` | `{}` |

### selectData
API selectData 结构

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| id | 当前select的id | `String` |`-` | `-` |
| list | 当前select可选列表 | `Array` |`-` | `[]` |
| selectIndex | 当前select的默认勾选索引 | `Number` |`-` | `0` |
| class | 当前select的class | `String` |`-` | `-` |
| event | 当前select的点击事件名称 | `String` |`-` | `-` |

### list
API selectData > list 结构

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| name | select内容 | `String` |`-` | `-` |

### Event

| 事件名 | 说明 |
|---------------------|----------------------------|
| select-item | select的点击事件回调，默认select-item，优先event，回传参数为select的id、勾选的索引i |