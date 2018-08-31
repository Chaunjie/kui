## ActionSheet 操作盘

### 使用指南
在页面中引入组件
```javascript
import ActionSheet from 'kai-ui/ActionSheet'

components = {
  actionsheet: ActionSheet
}
```

### 代码演示

#### 初始化

```html
<template>
  <view class="kai-content">
    <import src="../wxParse/wxParse.wxml"/>
    <view class="padding-10">
      <button class="btn btn-kai" catchtap="showActionSheet(1)">从底部弹出ActionSheet</button>
    </view>
    <repeat for="{{asData}}" index="i" item="item" key="row-{{index}}">
      <actionsheet :asData.sync="item"></actionsheet>
    </repeat>
  </view>
</template>
```

#### 调用
```javascript
this.$invoke('tab', 'doInitTabData', this.tabData)
```

#### 案例
```javascript
<style lang="less">
.list {
  color: #808080;
}
.bold {
  font-weight: bold;
}
</style>

<template>
  <view class="kai-content">
    <view class="padding-10">
      <button class="btn btn-kai" catchtap="showActionSheet(1)">从底部弹出ActionSheet</button>
    </view>
    <repeat for="{{asData}}" index="i" item="item" key="row-{{index}}">
      <actionsheet :asData.sync="item"></actionsheet>
    </repeat>
  </view>
</template>

<script>
import wepy from 'wepy'
import actionsheet from 'kai-ui/ActionSheet'

export default class ActionSheet extends wepy.page {
  config = {
    navigationBarTitleText: 'Actionsheet 操作盘'
  }

  components = {
    actionsheet: actionsheet
  }

  data = {
    asData: [
      {
        itemList: [{
          class: 'list bold',
          value: '江南忆',
          event: '',
          slotid: 'slotid0'
          // ,slot: '<view class="kai-iconfont kai-icon-success">alot1</view><view class="kai-iconfont kai-icon-delete">alot11</view>'
        },
        {
          class: 'list',
          value: '其次忆吴宫',
          event: '',
          slotid: 'slotid1'
          // ,slot: '<view class="kai-iconfont kai-icon-minus">slot2</view><view class="kai-iconfont kai-icon-plus">alot21</view>'
        },
        {
          class: 'list',
          value: '吴酒一杯春竹叶',
          event: ''
        },
        {
          class: 'list',
          value: '吴娃双舞醉芙蓉',
          event: ''
        },
        {
          class: 'list',
          value: '早晚复相逢',
          event: ''
        }],
        top: true,
        index: 0,
        show: false
      },
      {
        itemList: [{
          class: 'bold list1',
          value: '自定义',
          event: ''
        },
        {
          value: '拍摄',
          event: ''
        },
        {
          value: '从手机相册选择',
          event: ''
        }],
        index: 1,
        show: false
      }
    ]
  }

  computed = {}

  methods = {
    showActionSheet (i) {
      this.asData.map((r, i) => {
        r.show = false
      })
      this.asData[i].show = true
    }
  }

  hideActionsheet (i) {
    this.asData[i].show = false
  }

  events = {
    'action-sheet': function (i, index, close) {
      console.log(i, index, close)
      if (close === 'true') {
        console.log('您选择了取消')
      } else {
        console.log(i, index)
      }
      this.hideActionsheet(i)
    }
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| asData | 操作盘json数据配置 | `Object` |`-` | `{}` |

### list
Api asData

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| class | 类名 | `String` |`-` | `-` |
| value | 值 | `String` |`-` | `-` |
| event | 点击事件名称 | `String` |`-` | `action-sheet` |


