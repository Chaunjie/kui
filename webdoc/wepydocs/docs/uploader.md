## Uploader 上传

### 使用指南
在页面中引入组件
```javascript
import Uploader from 'kai-ui/Uploader'

components = {
  uploader: Uploader
}
```

### 代码演示

#### 初始化

```html
<template>
  <view class="kai-content">
    <panel>
      <view slot="title" class="title">上传凭证</view>
      <view class="panel-upload">
        <repeat for="{{imgList}}" index="index" item="item" key="row-{{index}}">
          <view class="img-list flex-list common-bg" style="width:{{imgWidth+'px'}};height:{{imgWidth+'px'}};background-image:url({{item.url}})"
                catchtap="previewImg({{imgList}}, {{item.url}})">
            <text class="kai-iconfont kai-icon-close delete-file" catchtap="removeImg({{index}})"></text>
          </view>
        </repeat>
        <uploader :imgWidth.sync="imgWidth" :total="imgTotal" region="ECN" :imgList.sync="imgList" :domain="domain" :uptokenURL="uptokenURL" :test="test"></uploader>
      </view>
    </panel>
  </view>
</template>
```

#### 案例
```javascript
<style lang="less" src="../node_modules/kai-ui/src/less/font"></style>
<style lang="less">
  /*file*/
  .panel-upload{
    display: flex;
    flex-wrap: wrap;
    .img-list {
      width: 80px;
      height: 80px;
      display: inline-block;
      margin: 0 10px 10px 0;
      position: relative;
      .delete-file {
        position:absolute;
        top:-7px;
        right:-5px;
        z-index:99;
        background:#fff;
        border-radius:8px;
        font-size:16px;
        border:1px solid #fff;
        width:16px;
        height:16px;
      }
    }
    .flex-list:nth-child(4n) {
      margin-right: 0;
    }
  }
</style>
<template>
  <view class="kai-content">
    <panel>
      <view slot="title" class="title">上传凭证</view>
      <view class="panel-upload">
        <repeat for="{{imgList}}" index="index" item="item" key="row-{{index}}">
          <view class="img-list flex-list common-bg" style="width:{{imgWidth+'px'}};height:{{imgWidth+'px'}};background-image:url({{item.url}})"
                catchtap="previewImg({{imgList}}, {{item.url}})">
            <text class="kai-iconfont kai-icon-close delete-file" catchtap="removeImg({{index}})"></text>
          </view>
        </repeat>
        <uploader :imgWidth.sync="imgWidth" :total="imgTotal" region="ECN" :imgList.sync="imgList" :domain="domain" :uptokenURL="uptokenURL" :test="test"></uploader>
      </view>
    </panel>
  </view>
</template>

<script>
import wepy from 'wepy'
import uploader from 'kai-ui/Uploader'
import panel from 'kai-ui/Panel'

export default class Uploader extends wepy.page {

  config = {
    navigationBarTitleText: 'Uploader 上传'
  }

  components = {
    uploader: uploader,
    panel: panel
  }

  data = {
    imgTotal: 5,  // 可上传图片总数
    imgList: [],  // 图片上传列表
    imgWidth: 90,
    domain: '',
    uptokenURL: '',
    test: true
  }

  computed = {}

  methods = {
    // 图片预览
    previewImg (list, cur) {
      var that = this
      let urls = []
      for (let i = 0, len = list.length; i < len; i++) {
        urls.push(list[i].url)
      }
      wx.previewImage({
        current: cur, // 当前显示图片的http链接
        urls: urls, // 需要预览的图片http链接列表
        success: function (res) {
          that.$apply()
        },
        fail: function (res) {
          console.log(res)
        },
        complete: function (res) {
          console.log(res)
        }
      })
    },
    // 删除图片
    removeImg (idx) {
      this.imgList.splice(idx, 1)
      this.$apply()
    }
  }

  events = {
    // 上传图片成功回调
    'refresh-img-list': (data, test) => {
      if (test) {
        this.imgList.push({url: data})
      } else {
        this.imgList.push({url: data.imageURL})
      }
      this.$apply()
    }
  }

  onLoad() {
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        const windowWidth = ~~res.windowWidth
        console.log(windowWidth)
        that.imgWidth = (windowWidth - 20 - 30) / 4  // 两个外边距 和三个内边距
        that.$apply()
      }
    })
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| uptokenURL | 上传图片token url | `String` |`-` | `-` |
| domain | 上传域名 | `String` |`-` | `-` |
| imgList | 上传图片列表 | `Array` |`-` | `-` |
| imgWidth | 图片宽度 | `Number` |`-` | `-` |
| region | 七牛上传区域 | `String` |`-` | `-` |
| total | 七牛上传区域 | `Number` |`-` | `-` |

