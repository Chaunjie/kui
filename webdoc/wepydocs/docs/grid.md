## Grid 宫格

### 使用指南
在页面中引入组件
```javascript
import Grid from 'kai-ui/Grid'
import gridItem from 'kai-ui/gridItem/'

components = {
  grid: Grid,
  griditem: gridItem
}
```

### 代码演示

#### 初始化

```html
<template>
  <grid col="9">
    <griditem>
      <!-- 内容 -->
    </griditem>
  </grid>
</template>
```

#### 案例

```css
<style lang="less">
  .title {
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
  }
  .content {
    font-size: 12px;
    text-align: center;
  }
  .custom-icon{
    font-size: 30px !important;
    text-align:center;
  }
</style>
```

```javascript
<template>
  <view class="kai-content" style="width: 100%">
    <panel class="no-padding">
      <view slot="title" class="title">9宫格</view>
      <view class="panel">
        <grid col="9" @tap="onClick">
          <repeat for="{{arr9}}" index="index" item="item" key="key">
            <griditem>
              <view slot="content" class="custom-icon">
                <icon :type.sync="iconArr[index]"/>
                <view class="content">{{iconArr[index]}}</view>
              </view>
            </griditem>
          </repeat>
        </grid>
      </view>
    </panel>
    <panel class="no-padding">
      <view slot="title" class="title">16宫格</view>
      <view class="panel">
        <grid1 col="16" @tap="onClick">
          <repeat for="{{arr16}}" index="index" item="item" key="key">
            <griditem1 width="25%">
              <view slot="content">
                <view class="title">标题</view>
                <view class="content">内容</view>
              </view>
            </griditem1>
          </repeat>
        </grid1>
      </view>
    </panel>
  </view>
</template>

<script>
import wepy from 'wepy'
import grid from 'kai-ui/Grid'
import gridItem from 'kai-ui/GridItem'
import panel from 'kai-ui/Panel'
import icon from 'kai-ui/Icon'

export default class Grid extends wepy.page {
  config = {
    navigationBarTitleText: 'Grid 宫格'
  }

  components = {
    grid: grid,
    grid1: grid,
    griditem: gridItem,
    griditem1: gridItem,
    panel: panel,
    icon: icon
  }

  data = {
    arr9: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    arr16: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    iconArr: ['calendar', 'camera', 'cart', 'comment', 'edit', 'gear', 'image', 'mail', 'map'],
    itemWidth: '33.333333%'
  }

  computed = {}

  methods = {
    onClick () {
      console.log('点击宫格')
    }
  }

  events = {
  }

  onLoad() {
  }
}
</script>

```

### API

grid

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| col | 宫格数 | `Number` | `9` `16`  | `9` |

grid-item

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-----------|-----------|-----------|-------------|
| width | 宫格宽度 | `String` | ——  | `33.33333333%` |

Slot

| 名称 | 说明 |
|-----------|-----------|
| content | 宫格自定义内容 |