## Grid 宫格

### 使用指南
在 `xxx.wpy`页面中引入组件
```javascript
import Grid from 'kai-ui/Grid'

components = {
  grid: Grid
}
```

### 代码演示

#### 初始化

```html
<template>
  <grid :grid="grid" :gridData="gridlist"></grid>
</template>
```

```javascript

<style lang="less">
.grid-container {
  background-color: #ccc;
}
.grid-items {
  height: 80px;
  background: #fff;
  color: #666;
}
.no-padding .info{
  padding: 0;
}
</style>
<template>
  <view class="kai-content">
    <panel class="no-padding">
      <view slot="title" class="title">9宫格</view>
      <view class="panel">
        <grid1 :grid="grid1" :gridData="gridlist1"></grid1>
      </view>
    </panel>
    <panel class="no-padding">
      <view slot="title" class="title">16宫格</view>
      <view class="panel">
        <grid :grid="grid2" :gridData="gridlist2"></grid>
      </view>
    </panel>
  </view>
</template>

<script>
import wepy from 'wepy'
import grid from 'kai-ui/Grid'
import panel from 'kai-ui/Panel'
import icon from 'kai-ui/Icon'

export default class Grid extends wepy.page {
  config = {
    navigationBarTitleText: 'Grid 宫格'
  }

  components = {
    grid: grid,
    grid1: grid,
    panel: panel,
    icon: icon
  }

  data = {
    grid1: 9,
    grid2: 16,
    gridlist1: [],
    gridlist2: [],
    gridItems: [
      {
        icon: 'comment',
        text: '评论'
      },
      {
        icon: 'camera',
        text: '相机'
      },
      {
        icon: 'calendar',
        text: '日历'
      },
      {
        icon: 'cart',
        text: '购物车'
      },
      {
        icon: 'date',
        text: '时间'
      },
      {
        icon: 'edit',
        text: '编辑'
      },
      {
        icon: 'gear',
        text: '设置'
      },
      {
        icon: 'home',
        text: '主页'
      },
      {
        icon: 'image',
        text: '图像'
      },
      {
        icon: 'laud',
        text: '点赞'
      },
      {
        icon: 'service',
        text: '服务'
      },
      {
        icon: 'like',
        text: '收藏'
      },
      {
        icon: 'mail',
        text: '邮件'
      },
      {
        icon: 'map',
        text: '地图'
      },
      {
        icon: 'mobile',
        text: '手机'
      },
      {
        icon: 'video',
        text: '摄像'
      }
    ]
  }

  computed = {}

  methods = {
  }

  events = {
  }

  initData (grid, gridItems, gridlist) {
    const rows = Math.sqrt(grid)
    const cols = rows
    // 初始化grid
    for (let i = 1, k = 0; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        gridlist.push({
          class: 'grid-items' + i + j,
          name: 'row' + i + '-col' + j,
          icon: gridItems[k].icon,
          text: gridItems[k].text
        })
        k++
      }
    }
    console.log(this.gridlist)
    this.$apply()
    // 初始化grid
  }

  onLoad() {
    const {grid1, grid2, gridItems, gridlist1, gridlist2} = this
    this.initData(grid1, gridItems, gridlist1)
    this.initData(grid2, gridItems, gridlist2)
  }
}
</script>

```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-------------------------|-----------|-----------|-------------|
| grid | 宫格类型 | `Number` | `9` `16` | `9` |
| gridData | 宫格数据 | `Array` | `自定义` | `[]` |

### gridData
  Api gridData数组参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-------------------------|-----------|-----------|-------------|
| icon | 宫格图标 | `String` | `自定义`| ` ` |
| text | 宫格文案 | `String` | `自定义` | ` ` |
