## Input 输入框

### 使用指南
在页面中引入组件
```javascript
import Input from 'kai-ui/Input'

components = {
  'input-name': input
}
```

### 代码演示

#### 初始化

```html
<template>
  <input-name :config="name" @onInput.user="_handleInput" @onBlur.user="_handleBlur"></input-name>
</template>
```

#### 案例
```javascript
<style lang="less">
  .no-title__content {
    .field-wrapped {
      margin: 0;
    }
  }
  .wrap {
    input {
      border: 1px solid #ccc;
    }
  }
</style>
<template>
  <view class="kai-content">
    <view class="padding-10 font-12">基础用法</view>
    <view style="background-color: #fff;">
      <input-name :config="name" @onInput.user="_handleInput" @onBlur.user="_handleBlur"></input-name>
      <input-tel :config="tel"></input-tel>
      <input-password :config="pwd"></input-password>
      <input-address :config="address"></input-address>
      <input-disabled :config="disabled"></input-disabled>
    </view>
    <view class="padding-10 font-12">无边框用法</view>
    <view style="background-color: #fff;" class="no-title__content">
      <input-notitle :config="notitle"></input-notitle>
    </view>
    <view class="padding-10 font-12">带清除按钮</view>
    <view style="background-color: #fff;">
      <input-clear :config="clear"></input-clear>
    </view>
    <view class="padding-10 font-12">带正则匹配</view>
    <view style="background-color: #fff;">
      <input-filter :config="filter"></input-filter>
    </view>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import input from 'kai-ui/Input'

  export default class Input extends wepy.page {
    config = {
      navigationBarTitleText: 'Input 输入框'
    }

    data = {
      name: {
        label: '收货人',
        value: '小明',
        placeholder: '名字'
      },
      disabled: {
        label: '用户信息',
        disabled: true,
        value: '该输入框已禁用',
        placeholder: '不可用输入框'
      },
      tel: {
        error: true,
        label: '联系电话',
        inputType: 'number',
        placeholder: '请输入手机号'
      },
      pwd: {
        label: '输入密码',
        inputType: 'password',
        placeholder: '请输入密码'
      },
      address: {
        label: '详细地址',
        type: 'textarea',
        maxlength: 20,
        placeholder: '请输入详细地址(最多20个字)'
      },
      clear: {
        label: '清除按钮',
        clear: true,
        adjust: true,
        value: '腹背受敌',
        placeholder: '带清除按钮'
      },
      notitle: {
        adjust: true,
        placeholder: '请输入收货人姓名',
        componentId: 'textarea:test'
      },
      filter: {
        adjust: true,
        label: '带正则',
        filter: /^(\+?0?86?)?1[3456789]\d{9}$/,
        placeholder: '手机号码正则'
      }
    }

    components = {
      'input-name': input,
      'input-disabled': input,
      'input-tel': input,
      'input-address': input,
      'input-notitle': input,
      'input-password': input,
      'input-clear': input,
      'input-filter': input
    }

    methods = {
      _handleInput (e) {
        console.log(e)
      },
      _handleBlur (e) {
        console.log(e)
      }
    }
  }
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| value | 当前值 | `String` |`-` | `-` |
| label | label 标签名 | `String` |`-` | `-` |
| placeholder | 输入提示 | `String` |`-` | `-` |
| focus | 是否自动获取焦点 | `Boolean` |`false` `true` | `false` |
| maxlength | 最大长度 | `Number` |`-` | `9999` |
| type | 是否是文本域 | `String` |`textarea` ` ` | ` ` |
| error | 是否开启提示错误, 需要搭配 filter 使用 | `Boolean` |`true` `false` | `false` |
| clear | 是否显示清空按钮 | `Boolean` |`true` `false` | `false` |
| adjust | 键盘弹起时，是否自动上推页面 | `Boolean` |`true` `false` | `false` |
| disabled | 输入框是否禁用 | `Boolean` |`true` `false` | `false` |
| componentId | 组件id（适用于数组类型） | `String` |`-` | `-` |
| inputType | 输入框类型 | `String` |`text` `password` `number` `idcard` `digit` | `text` |
| filter | 输错需要提示的正则(例: /^(\+?0?86?)?1[3456789]\d{9}$/ 手机号码正则) | `Object` |`-` | `-` |

### Event

| 事件名 | 说明 |
|---------------------|----------------------------|
| @onInput.user | 输入框内容改变时触发，回传参数为输入框改变后的值 |
| @onBlur.user | 输入框失去焦点时触发，回传参数为输入框改变后的值 |