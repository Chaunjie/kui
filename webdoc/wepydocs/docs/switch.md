## Switch 开关

### 使用指南
在页面中引入组件
```javascript
import Switch from 'kai-ui/Switch'

components = {
  switch: Switch
}
```

### 代码演示

#### 初始化

```html
<template>
  <switch
    :checked.sync="item1.checked"
    :disabled.sync="item1.disabled"
    :componentId.sync="item1.componentId"
    className="test-switch"
    :sync.sync="item1.sync"
    :loading.sync="item1.loading"
    @onChange.user="change"/>
  <switch-sync
    :checked.sync="item.checked"
    :disabled.sync="item.disabled"
    :type.sync="item.type"
    :componentId.sync="item.componentId"
    className="test-switch"
    @onChange.user="doChange"/>
</template>
```

#### 案例
```javascript
<template>
  <view class="kai-content">
    <repeat for="{{items}}" index="index" item="item" key="switch-{{index}}">
      <view class="padding-10 font-12">{{item.title}}</view>
      <view class="padding-10">
        <switch
          :checked.sync="item.checked"
          :disabled.sync="item.disabled"
          :size.sync="item.size"
          :componentId.sync="item.componentId"
          className="test-switch"
          :sync.sync="item.sync"
          :loading.sync="item.loading"
          @onChange.user="change"/>
      </view>
    </repeat>
    <view class="padding-10 font-12">其它样式</view>
    <view class="padding-10">
      <repeat for="{{items1}}" index="index" item="item" key="switch-{{index}}">
        <switch-type
          :checked.sync="item.checked"
          :disabled.sync="item.disabled"
          :size.sync="item.size"
          :type.sync="item.type"
          :componentId.sync="item.componentId"
          className="test-switch"
          @onChange.user="doChange"/>
      </repeat>
    </view>
  </view>
</template>
<script>
import Switch from 'kai-ui/Switch'
export default class Index extends wepy.page {
  components = {
    switch: Switch,
        'switch-type': Switch
  }

  data = {
    items: [
        {
          title: '普通样式',
          checked: false,
          disabled: false,
          componentId: 'switch1'
        },
        {
          title: '禁选样式',
          checked: true,
          disabled: true,
          componentId: 'switch2'
        },
        {
          title: '异步样式',
          checked: false,
          disabled: false,
          sync: true,
          loading: false,
          componentId: 'switch3'
        }
      ],
      items1: [
        {
          checked: true,
          disabled: false,
          type: 'success',
          componentId: 'switch4'
        },
        {
          checked: true,
          disabled: false,
          type: 'kai',
          componentId: 'switch5'
        },
        {
          checked: true,
          disabled: false,
          type: 'danger',
          componentId: 'switch6'
        },
        {
          checked: true,
          disabled: false,
          type: 'warn',
          componentId: 'switch7'
        }
      ]
  }

  methods = {
    change (res) {
        const {items} = this
        for (let i = 0; i < items.length; i++) {
          if (items[i].componentId === res.componentId) {
            if (res.sync) {
              this.items[i].loading = true
              setTimeout(() => {
                this.items[i].loading = false
                this.items[i].checked = res.checked
                this.$apply()
              }, 1000)
            } else {
              this.items[i].checked = res.checked
              this.$apply()
            }
          }
        }
        console.log(res)
      },
      doChange (res) {
        const {items1} = this
        for (let i = 0; i < items1.length; i++) {
          if (items1[i].componentId === res.componentId) {
            this.items1[i].checked = res.checked
            this.$apply()
          }
        }
      }
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| className | 开关自定义样式 | `String` |`-` | `-` |
| checked | 开关是否开启 | `Boolean` |`false` `true` | `false` |
| disabled | 开关是否可操作 | `Boolean` |`false` `true` | `false` |
| type | 开关样式 | `String` |`success` `kai` `danger` `warn` | `success` |
| componentId | 开关组件id（自定义） | `String` |`-` | `-` |
| sync | 是否异步 | `Boolean` |`false` `true` | `false` |
| loading | 是否显示loading图案 | `Boolean` |`false` `true` | `false` |

### Event

| 事件名 | 说明 |
|---------------------|----------------------------|
| @onChange.user | 开关状态改变时触发，回传参数为开关改变后的状态 |