## Toast 轻提示

### 使用指南
在页面中引入组件
```javascript
import Toast from 'kai-ui/Toast'

components = {
  toast: Toast
}
```

### 代码演示

#### 初始化

```html
<template>
  <toast />
</template>
```

#### 调用
```javascript
this.$invoke('toast', 'show', options)
```

#### 案例
```javascript
<template>
  <toast />
  <view class="padding-10">
    <button @tap="showSuccess('loading', '加载中的提示')" class="btn btn-kai">加载中</button>
  </view>
  <view class="padding-10">
    <button @tap="showSuccess('success', '成功的提示')" class="btn btn-kai">成功</button>
  </view>
  <view class="padding-10">
    <button @tap="showSuccess('error', '失败的提示')" class="btn btn-kai">失败</button>
  </view>
  <view class="padding-10">
    <button @tap="showSuccess('warning', '警告的提示')" class="btn btn-kai">警告</button>
  </view>
  <view class="padding-10">
    <button @tap="showSuccess('', '纯文本的提示')" class="btn btn-kai">纯文本</button>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import Toast from 'kai-ui/Toast'

  export default class ToastPage extends wepy.page {
    config = {
      navigationBarTitleText: 'Toast 轻提示'
    }
    data = {}

    components = {
      toast: Toast
    }

    methods = {
      showSuccess (type, msg) {
        const options = {
          content: msg,
          position: 'middle',
          duration: 2000,
          type: type,
          afterClose: 'afterClose'
        }
        this.$invoke('toast', 'show', options)
      }
    }

    events = {
      afterClose () {
        console.log('这是提示关闭后的回调函数')
      }
    }
  }
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| content | 提示内容 | `String` |`-` | ` ` |
| position | 消息弹出位置 | `String` |`top` `middle` `bottom` | `middle` |
| duration | 消息弹出持续时间，单位毫秒 | `Number` |`-` | `3000` |
| type | 消息类型 | `String` |`success` `error` `warning` `loading` | `-` |
| afterClose | 回调函数名 | `String` |`-` | `-` |

