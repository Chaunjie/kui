## Popup 弹出窗

### 使用指南
在页面中引入组件
```javascript
import Popup from 'kai-ui/Popup'

components = {
  popup: Popup
}
```

### 代码演示

#### 初始化

```html
<template>
  <view class="kai-content">
    <view class="padding-10">
      <button class="btn"  bindtap="popPosition(0)">弹出popup</button>
      <button class="btn btn-success" catchtap="popPosition(1)">从顶部弹出popup</button>
      <button class="btn btn-kai" catchtap="popPosition(3)">从底部弹出popup</button>
      <button class="btn btn-warn btn-empty" bindtap="popPosition(4)">从左边弹出popup</button>
      <button class="btn btn-danger btn-empty" catchtap="popPosition(2)">从右边弹出popup</button>
    </view>
    <repeat for="{{popData}}" index="i" item="item" key="row-{{index}}">
      <popup :show.sync="item.showPopup" :position.sync="item.position" :id.sync="i" :maskHide.sync="item.maskHide">
        <block slot="popContainer">
          <view class="pop-inner {{'pop-'+item.position}}">
            <view class="pop-text">忆江南</view>
            <view class="pop-text">江南好</view>
            <view class="pop-text">风景旧曾谙</view>
            <view class="pop-text">日出江花红胜火</view>
            <view class="pop-text">春来江水绿如蓝</view>
            <view class="pop-text">能不忆江南</view>
            <button class="btn btn-kai margin-top20" catchtap="close({{i}})">
              关闭
            </button>
          </view>
        </block>
      </popup>
    </repeat>
  </view>
</template>
```

#### 案例
```javascript
<style lang="less">
  .pop-inner {
    padding: 40px 20px;
    box-sizing: border-box;
  }
  .pop-text {
    font-size: 16px;
    text-align: center;
    line-height: 28px;
  }
  .pop-center {
    width: 240px;
    height: 300px;
  }
  .pop-right {
    width: 200px;
  }
  .pop-left {
    width: 200px;
  }
  .margin-top20 {
    margin-top: 20px;
  }
</style>

<template>
  <view class="kai-content">
    <view class="padding-10">
      <button class="btn"  bindtap="popPosition(0)">弹出popup</button>
      <button class="btn btn-success" catchtap="popPosition(1)">从顶部弹出popup</button>
      <button class="btn btn-kai" catchtap="popPosition(3)">从底部弹出popup</button>
      <button class="btn btn-warn btn-empty" bindtap="popPosition(4)">从左边弹出popup</button>
      <button class="btn btn-danger btn-empty" catchtap="popPosition(2)">从右边弹出popup</button>
    </view>
    <repeat for="{{popData}}" index="i" item="item" key="row-{{index}}">
      <popup :show.sync="item.showPopup" :position.sync="item.position" :id.sync="i" :maskHide.sync="item.maskHide">
        <block slot="popContainer">
          <view class="pop-inner {{'pop-'+item.position}}">
            <view class="pop-text">忆江南</view>
            <view class="pop-text">江南好</view>
            <view class="pop-text">风景旧曾谙</view>
            <view class="pop-text">日出江花红胜火</view>
            <view class="pop-text">春来江水绿如蓝</view>
            <view class="pop-text">能不忆江南</view>
            <button class="btn btn-kai margin-top20" catchtap="close({{i}})">
              关闭
            </button>
          </view>
        </block>
      </popup>
    </repeat>
  </view>
</template>

<script>
import wepy from 'wepy'
import Popup from 'kai-ui/Popup'

export default class Popup extends wepy.page {
  config = {
    navigationBarTitleText: 'Popup 弹出层'
  }
  components = {
    popup: popup
  }

  data = {
    popData: [
      {
        showPopup: true,
        position: 'center',
        maskHide: false
      },
      {
        showPopup: false,
        position: 'top',
        maskHide: false
      },
      {
        showPopup: false,
        position: 'right'
      },
      {
        showPopup: false,
        position: 'bottom'
      },
      {
        showPopup: false,
        position: 'left'
      }
    ]
  }

  computed = {}

  methods = {
    popPosition (i) {
      this.popData.map(function (r, i) {
        r.showPopup = false
      })
      this.popData[i].showPopup = true
    },
    close (i) {
      this.popData[i].showPopup = false
      console.log(this.popData[i].showPopup)
    }
  }

  events = {
    pop: function (i, op) {
      this.popData[i].showPopup = op ? false : !this.popData[i].showPopup
    }
  }

  onLoad() {}
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|-------------------------|-----------|-----------|-------------|
| id | 标签类型 | `String` |`-` | `0` |
| show | 是否展示弹窗 | `Boolean  ` |`false` `true` | `false` |
| position | 弹出位置 | `String` |`top` `center` `right` `bottom` `left` | `bottom` |
| maskHide | 点击mask是否关闭popup | `Boolean` |`true` `false` | `true` |

### Event
| 事件名 | 说明 |
|-----------|---------------|
| pop | 当点击关闭的时候触发，回传参数 i: 索引i; op:是否关闭 |

