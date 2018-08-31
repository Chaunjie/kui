## Cell 列表

### 使用指南
在页面中引入组件
```javascript
import Cell from 'kai-ui/Cell'

components = {
  cell: Cell
}
```

### 代码演示

#### 初始化

```html
<template>
  <view class="panel">
      <repeat for="{{cellList}}" index="index" item="item" key="row-{{index}}">
        <cell :celldata="item"></cell>
      </repeat>
    </view>
</template>
```

#### 回调
```javascript
events = {
  'item-tap': (type, url) => {
    wx.navigateTo({
      url: url
    })
  }
}
```

#### 案例
```javascript
<template>
  <view class="kai-content">
    <view class="panel">
      <repeat for="{{cellList}}" index="index" item="item" key="row-{{index}}">
        <cell :celldata="item"></cell>
      </repeat>
    </view>
  </view>
</template>

<script>
import wepy from 'wepy'
import Cell from 'kai-ui/Cell'

export default class Cell extends wepy.page {
  config = {
    navigationBarTitleText: '列表'
  }

  components = {
    cell: Cell
  }

  data = {
    cellList: [
      [
        {
          title: '默认'
        }
      ],
      [
        {
          title: '单行有附加信息',
          subtitle: '图片icon',
          detail: '有箭头',
          linktype: 1,
          link: 'index',
          icontype: '2',
          icontext: 'https://gss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/12.6155.png'
        }
      ]
    ]
  }

  computed = {}

  methods = {}

  events = {
    'item-tap': (type, url) => {
      if (url !== '#') {
        wx.navigateTo({
          url: url
        })
      }
    }
  }

  onLoad() {
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-------------------------|-----------|-----------|-------------|
| celldata | 列表组件数据信息 | `Array` | `自定义` | `[]` |

### celldata
  Api celldata数组参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-------------------------|-----------|-----------|-------------|
| title | 主体内容 | `String` | `自定义`| ` ` |
| subtitle | 附加内容 | `String` | `自定义` | ` ` |
| detail | 右侧描述 | `String` | `自定义` | ` ` |
| linktype | 是否需要跳转 0: 无跳转 1：跳转 | `String` `Number` | `自定义` | ` ` |
| icontype | 图标类型 0：无图片 1：icon 2：图片 | `String` `Number` | `自定义` | ` ` |
| icontext | 图标 图片地址 | `String` | `自定义` | ` ` |
| link | 页面跳转 | `String` | `自定义` | ` ` |
