## Dialog 对话框

### 使用指南
在页面中引入组件
```javascript
import Dialog from 'kai-ui/Dialog'

components = {
  dialog: Dialog
}
```

### 代码演示

#### 初始化

```html
<template>
  <dialog />
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
<template>
  <dialog />
  <view class="padding-10">
    <button @tap="showSuccess" class="btn btn-kai">纵向对话框</button>
  </view>
  <view class="padding-10">
    <button @tap="showkai" class="btn btn-kai">横向对话框</button>
  </view>
</template>
<script>
import Dialog from 'kai-ui/Radio'
export default class Index extends wepy.page {
  components = {
    dialog: Dialog
  }

  methods = {
    showSuccess () {
      const options = {
        title: '删除订单提示',
        content: '确定要删除该订单吗？',
        type: 'muti',
        showVertical: true,
        buttons: [{
          text: '取消'
        }, {
          text: '确定',
          color: '#C59E6C'
        }]
      }
      this.$invoke('dialog', 'show', options).then((value) => {
        console.log(value) // 0: 取消，1：确认
      }, () => {
        console.log('reject')
      })
    },
    showkai () {
      const options = {
        title: '支付选择',
        content: '请选择一种支付方式',
        type: 'muti',
        showVertical: false,
        buttons: [{
          text: '微信支付',
          color: '#0EB00B'
        }, {
          text: '支付宝',
          color: '#48A9E9'
        }, {
          text: '京东',
          color: '#E45143',
          sync: true
        }]
      }
      this.$invoke('dialog', 'show', options).then((value) => {
        console.log(value) // 0: 微信支付，1：支付宝，2：京东
            if (value === 2) {
              setTimeout(() => {
                this.$invoke('dialog', 'reset') // 异步按钮重置
              }, 3000)
            }
      }, () => {
        console.log('reject')
      })
    }
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| title | 对话框标题 | `String` |`-` | `标题` |
| content | 对话框内容 | `String` |`-` | `内容` |
| showVertical | 是否纵向显示按钮 | `Boolean` |`false` `true` | `false` |
| type | 按钮类型, mutil支持自定义 | `String` |`mutil` `base` `alert` | `base` |
| buttons | 对话框按钮组 | `Array` |`-` | `-` |

### buttons
API buttons 结构

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| text | 按钮内容 | `String` |`-` | `-` |
| color | 按钮字体颜色 | `String` |`-` | `-` |
| sync | 是否是异步按钮 | `Boolean` |`false` `true` | `false` |
