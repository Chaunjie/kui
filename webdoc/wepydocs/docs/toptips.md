## Toptips 顶部提示

### 使用指南
在页面中引入组件
```javascript
import Toptips from 'kai-ui/Toptips'

components = {
  toptips: Toptips
}
```

### 代码演示

#### 初始化

```html
<template>
  <toptips />
</template>
```

#### 调用
```javascript
this.$invoke('toptips', 'show', options)
```

#### 案例
```javascript
<template>
  <toptips />
  <view class="padding-10">
    <button @tap="showSuccess" class="btn btn-kai" style="margin-top:100px">点击弹出toptips</button>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import Toptips from 'kai-ui/Toptips'
  export default class ToptipsPage extends wepy.page {
    data = {}
    components = {
      toptips: Toptips
    }
    methods = {
      showSuccess () {
        const options = {
          content: '请输入正确的手机号',
          duration: 2000,
          afterClose: 'afterClose',
          className: 'mytest'
        }
        this.$invoke('toptips', 'show', options)
      }
    }
    events = {
      afterClose () {
        console.log('这是提示关闭后的回调函数')
      }
    }
  }
</script>

<style>
.mytest .toptips {
  background-color: #ff4400;
}
</style>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| content | 提示内容 | `String` |`-` | `提示内容` |
| afterClose | 回调函数名 | `String` |`-` | `-` |
| className | 自定义class | `String` |`-` | `-` |
| duration | 提示持续时间，单位毫秒 | `Number` |`-` | `3000` |

