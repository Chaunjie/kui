## Checkbox 多选框

### 使用指南
在页面中引入组件
```javascript
import checkbox from 'kai-ui/Checkbox'

components = {
  'checkbox-circle': checkbox
}
```

### 代码演示

#### 初始化

```html
<template>
  <checkbox-circle :config.sync="checkboxConfig" @bindchange.user="checkboxChange">
    <view slot="check-body">
      <repeat for="{{items}}" index="index" item="item" key="checkbox-{{index}}">
        <label class="checkbox-item">
          <view class="check-card">{{item.value}}</view>
          <checkbox value="{{item.id}}" checked="{{item.checked}}" disabled="{{item.disabled}}"/>
        </label>
      </repeat>
    </view>
  </checkbox-circle>
</template>
```

#### 案例
```javascript
<template>
  <checkbox-circle :config.sync="checkboxConfig" @bindchange.user="checkboxChange">
    <view slot="check-body">
      <repeat for="{{items}}" index="index" item="item" key="checkbox-{{index}}">
        <label class="checkbox-item">
          <view class="check-card">{{item.value}}</view>
          <checkbox value="{{item.id}}" checked="{{item.checked}}" disabled="{{item.disabled}}"/>
        </label>
      </repeat>
    </view>
  </checkbox-circle>
</template>
<script>
import checkbox from 'kai-ui/Checkbox'
export default class Index extends wepy.page {
  components = {
    'checkbox-circle': checkbox
  }

  data = {
    checkboxConfig: {
      className: 'sp-checkbox',
      position: 'left',
      circle: true
    },
    items: [{id: '1000', value: '圆形复选框', checked: true}]
  }

  methods = {
    checkboxChange (res) {
      console.log(res)
      if (res.length) {
        this.items[0].checked = true
        this.items1[0].checked = true
      } else {
        this.items[0].checked = false
        this.items1[0].checked = false
      }
      this.$apply()
    }
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| config | 复选框组配置信息 | `Object` |`-` | `{}` |

### config
API config 结构

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| className | 复选框组自定义样式 | `String` |`-` | `-` |
| position | 复选框出现的位置 | `String` |`left` `right` | `left` |
| circle | 复选框样式 | `Boolean` |`true` `false` | `true` |
| inline | 复选组是否显示在一行内 | `Boolean` |`true` `false` | `false` |

### Event

| 事件名 | 说明 |
|---------------------|----------------------------|
| @bindchange.user | 复选框状态改变时触发，回传参数是改变后的状态列表 |