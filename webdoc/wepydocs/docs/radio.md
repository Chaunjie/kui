## Radio 单选框

### 使用指南
在页面中引入组件
```javascript
import radio from 'kai-ui/Radio'

components = {
  'radio-circle': radio
}
```

### 代码演示

#### 初始化

```html
<template>
  <radio-circle :config.sync="config" @bindchange.user="radioChange">
    <block slot="radio-body">
      <repeat for="{{items}}" index="index" item="item" key="radio-{{index}}">
        <label class="radio-item">
          <view class="radio-card">{{item.value}}</view>
          <radio value="{{item.id}}" checked="{{item.checked}}" disabled="{{item.disabled}}"/>
        </label>
      </repeat>
    </block>
  </radio-circle>
</template>
```

#### 案例
```javascript
<template>
  <radio-circle :config.sync="config" @bindchange.user="radioChange">
    <block slot="radio-body">
      <repeat for="{{items}}" index="index" item="item" key="radio-{{index}}">
        <label class="radio-item">
          <view class="radio-card">{{item.value}}</view>
          <radio value="{{item.id}}" checked="{{item.checked}}" disabled="{{item.disabled}}"/>
        </label>
      </repeat>
    </block>
  </radio-circle>
</template>
<script>
import radio from 'kai-ui/Radio'
export default class Index extends wepy.page {
  components = {
    'radio-circle': radio
  }

  data = {
     checkboxConfig: {
      className: 'sp-radio',
      position: 'left',
      circle: true
    },
    items: [
          {id: '1001', value: '圆形单选框', checked: false, disabled: false},
          {id: '1002', value: '圆形单选框', checked: true, disabled: false}
      ]
  }

  methods = {
    radioChange (res) {
      console.log(res)
    }
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| config | 单选框组配置信息 | `Object` |`-` | `{}` |

### config
API config 结构

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| className | 单选框组自定义样式 | `String` |`-` | `-` |
| position | 单选框出现的位置 | `String` |`left` `right` | `left` |
| circle | 单选框样式 | `Boolean` |`true` `false` | `true` |
| inline | 单选组是否显示在一行内 | `Boolean` |`true` `false` | `false` |

### Event

| 事件名 | 说明 |
|---------------------|----------------------------|
| @bindchange.user | 单选框状态改变时触发，回传参数是改变后的状态列表 |